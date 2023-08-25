import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/booksSlice';
import './styles.css';

const Forms = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="addBook-container">
      <h3 className="addBook-title">ADD NEW BOOK</h3>
      <div>
        <form>
          <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} value={title} className="title-input" />
          <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} className="author-input" />
          <button
            type="button"
            onClick={() => {
              dispatch(addBook({
                item_id: nanoid(),
                title,
                author,
                category: 'Fiction',
              }));
              setTitle('');
              setAuthor('');
            }}
            className="add-btn"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};
export default Forms;
