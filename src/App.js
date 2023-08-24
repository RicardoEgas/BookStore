import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BooksList from './components/BooksList';
import Home from './components/Home';
import Categories from './components/Categories';
import { fetchBook } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  });
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<BooksList />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
