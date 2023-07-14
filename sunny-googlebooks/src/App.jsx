import { useState } from "react";
import BookList from "./components/BookList/BookList";
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

	const handleChange = (newSearch) => {
		setSearch(newSearch.target.value);
	};

	const handleSubmit = () => {
		if (search !== "" || undefined) {
			getBooks(search);
		}
	};

	return (
		<div className={styles.App}>
			<h1>
					What books are you looking for?
			</h1>
			
			<input type="text" value={search} onChange={handleChange} />
			<button onClick={handleSubmit}>Search</button>
			<BookList books={booksData} />
		</div>
	);
};

export default App;
