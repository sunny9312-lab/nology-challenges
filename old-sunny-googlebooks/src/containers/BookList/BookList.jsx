// import BookCard from "../../components/BookCard";

import styles from "./BookList.module.scss";

const BookList = ({ books }) => {
  return (
    <>
      <section className={styles.BookList__Grid}>
        {books.map((book) => (
          <div key={book.id}>
            <h3>{book.volumeInfo.title}</h3>
            <p>
              {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
            </p>
            <img
              src={
                book.volumeInfo.imageLinks &&
                book.volumeInfo.imageLinks.thumbnail
              }
              alt="Book Cover"
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default BookList;
