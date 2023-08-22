import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book() {
  const dispatch = useDispatch();

  return (
    <div>
      <li>Some random book</li>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook());
        }}
      >
        Remove Book
      </button>
    </div>
  );
}

export default Book;
