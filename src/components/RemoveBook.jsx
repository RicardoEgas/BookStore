import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  bookId, title, author, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="book-wraper">
      <div>
        <div>
          <p className="categoryBook">{category}</p>
          <h3 className="titleBook">{title}</h3>
          <p className="authorBook">{author}</p>
        </div>
        <div className="btn-container">
          <button className="btn-link" type="button">Comments</button>
          <button className="btn-link" type="button" onClick={() => dispatch(removeBook(bookId))}>Remove</button>
          <button className="btn-link" type="button">Edit</button>
        </div>
      </div>
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbar
          value={66}
          styles={{
            trail: {
              stroke: '#d6d6d6',
              strokeLinecap: 'butt',
              transformOrigin: 'center center',
            },
            path: {
              stroke: '#0290ff',
              strokeLinecap: 'butt',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transformOrigin: 'center center',
            },
          }}
        />
      </div>
      <div>
        <h2 className="percent-complete">
          66
          {' '}
          %
        </h2>
        <span className="completed">Completed</span>
      </div>
      <div className="verticle-line" />
      <div>
        <h2 className="current-chapter">CURRENT CHAPTER</h2>
        <h2 className="current-lesson">
          Chapter
        </h2>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>

  );
};

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
