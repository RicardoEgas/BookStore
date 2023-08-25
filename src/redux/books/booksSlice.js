import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vgCeoKowhQDHJHJRfK8R/books';

export const fetchBook = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book, thunk) => {
  await axios.post(url, JSON.stringify(book), { headers: { 'Content-Type': 'application/json' } });
  const response = thunk.dispatch(fetchBook());
  return response;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId, thunk) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vgCeoKowhQDHJHJRfK8R/books/${bookId}`);
  const response = thunk.dispatch(fetchBook());
  return response;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,

  extraReducers(builder) {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.books = [];
      Object.keys(action.payload).forEach((item) => {
        const book = action.payload[item][0];
        state.books.push({
          bookId: item, title: book.title, author: book.author, category: book.category,
        });
      });
    });
  },
});

export default booksSlice.reducer;
