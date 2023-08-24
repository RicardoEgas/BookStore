import { useSelector } from 'react-redux';
import Book from './RemoveBook';
import Forms from './Forms';

const Books = () => {
  const bookList = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {
          bookList.books.map((book) => (
            <Book
              key={book.bookId}
              bookId={book.bookId}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        }
      </ul>
      <Forms />
    </div>
  );
};

export default Books;
