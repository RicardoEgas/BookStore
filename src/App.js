import { Route, Routes } from 'react-router-dom';
import BooksList from './components/BooksList';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
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
