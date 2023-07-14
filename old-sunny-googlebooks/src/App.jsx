import { useState, useEffect } from "react";
import BookList from "./containers/BookList";
// ysh import Home from "./containers/Home/Home";
import styles from "./App.module.scss";

const App = () => {
	//setting state for the books
	const [booksData, setBooks] = useState([]);
	//setting state for the search result
	const [search, setSearch] = useState("");

	const getBooks = async (query) => {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`,
		);

		const data = await response.json();
		setBooks(data.items);
	};

	const handleSubmit = (newSearch) => {
		// setSearch(newSearch);   ysh
		setSearch(newSearch.target.value);
	};

	useEffect(() => {
		if (search !== "" || undefined) {
			getBooks(search);
		}
	}, [search]);

	return (
		<div className={styles.App}>
			<h1>
					What books are you
					looking for?
			</h1>
			{/* <input type="text" value={search}  /> */}
			<input type="text" value={search} onChange={handleSubmit} />
			{/* 버튼 추가ysh */}
			<button onClick={handleSubmit}>Search</button>
			{/* <Home onSubmit={handleSubmit} setSearch={setSearch} /> ysh */}
			<BookList books={booksData} />
		</div>
	);
};

export default App;
