import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    if (!title || !author || !publishYear) {
      enqueueSnackbar('Please fill in all fields', { variant: 'warning' });
      return;
    }

    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred. Please try again.', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Position Back Button in the top-left corner */}
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-800 my-6">Add Book</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="mb-4">
          <label className="block text-gray-600 text-lg font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter book title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-lg font-medium mb-2" htmlFor="author">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter author's name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-lg font-medium mb-2" htmlFor="publishYear">
            Publish Year
          </label>
          <input
            id="publishYear"
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter publish year"
          />
        </div>

        <button
          onClick={handleSaveBook}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
          disabled={loading}
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
