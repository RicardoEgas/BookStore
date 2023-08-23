import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove a book</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
