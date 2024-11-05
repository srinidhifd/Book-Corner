import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
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
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}

      {/* Back Button at Top-Left Corner */}
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 my-6">Delete Book</h1>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Are you sure you want to delete this book?
        </h3>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleDeleteBook}
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
            disabled={loading}
          >
            Yes, Delete it
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBooks;
