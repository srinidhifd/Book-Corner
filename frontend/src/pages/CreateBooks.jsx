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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Input Fields Validation Function
  const validateInputs = () => {
    const errors = {};
  
    // Title validation
    if (!title) {
      errors.title = 'Title is required.';
    } else if (!/^[\w\s\-.,!?]+$/.test(title)) {
      errors.title = 'Title must be alphanumeric and may include special characters.';
    }
  
    // Author validation
    if (!author) {
      errors.author = 'Author name is required.';
    } else if (!/^[a-zA-Z\s.]+$/.test(author)) {
      errors.author = 'Author name should contain only alphabets, spaces, or dots.';
    }
  
    // Publish Year validation
    if (!publishYear) {
      errors.publishYear = 'Publish year is required.';
    } else if (!/^\d{4}$/.test(publishYear) || parseInt(publishYear) > new Date().getFullYear()) {
      errors.publishYear = 'Enter a valid publish year in YYYY format (up to the current year).';
    }
  
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const handleSaveBook = () => {
    if (!validateInputs()) {
      enqueueSnackbar('Please fix validation errors before saving.', { variant: 'error' });
      return;
    }

    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('An error occurred. Please try again.', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}
      <BackButton />
      <h1 className="text-3xl font-bold text-gray-800 my-6">Add Book</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 text-lg font-medium mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border px-4 py-2 rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter book title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-600 text-lg font-medium mb-2">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={`w-full border px-4 py-2 rounded-md ${errors.author ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter author's name"
          />
          {errors.author && <p className="text-red-500 text-sm mt-1">{errors.author}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="publishYear" className="block text-gray-600 text-lg font-medium mb-2">
            Publish Year
          </label>
          <input
            id="publishYear"
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className={`w-full border px-4 py-2 rounded-md ${errors.publishYear ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter publish year"
          />
          {errors.publishYear && <p className="text-red-500 text-sm mt-1">{errors.publishYear}</p>}
        </div>

        <button
          onClick={handleSaveBook}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
