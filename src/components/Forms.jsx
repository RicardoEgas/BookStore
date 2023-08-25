import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addBook } from '../redux/books/booksSlice';

const Forms = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div>
        <form>
          <input type="text" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} value={title} />
          <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
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
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};
export default Forms;
