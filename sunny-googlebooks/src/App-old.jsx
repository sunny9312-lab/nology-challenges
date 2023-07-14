import { useState, useEffect } from "react";
import BookList from "./components/BookList/old-index";
import styles from "./App.module.scss";

const App = () => {
	//setting state for the books
	const [booksData, setBooksData] = useState([]);
	//setting state for the search result
	const [search, setSearch] = useState("");

	const getBooks = async (query) => {
		const response = await fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`,
		);

		const data = await response.json();
		setBooksData(data.items);
	};

	const handleSubmit = (newSearch) => {
		
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
					What books are you looking for?
			</h1>
			
			<input type="text" value={search} onChange={handleSubmit} />
			<button onClick={handleSubmit}>Search</button>
			<BookList books={booksData} />
		</div>
	);
};

export default App;
