import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineBook, AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineLabel } from 'react-icons/md';  // Import an outlined label icon for ID
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const DisplayBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="relative flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}

      {/* Back Button positioned in the top-left */}
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 my-6">Book Details</h1>

      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <MdOutlineLabel className="text-2xl text-blue-600" />  {/* Outlined label icon */}
            <span className="text-xl font-medium text-gray-600">ID:</span>
            <span className="text-lg text-gray-800">{book._id}</span>
          </div>

          <div className="flex items-center gap-4">
            <AiOutlineBook className="text-2xl text-blue-600" />
            <span className="text-xl font-medium text-gray-600">Title:</span>
            <span className="text-lg text-gray-800">{book.title}</span>
          </div>

          <div className="flex items-center gap-4">
            <AiOutlineUser className="text-2xl text-blue-600" />
            <span className="text-xl font-medium text-gray-600">Author:</span>
            <span className="text-lg text-gray-800">{book.author}</span>
          </div>

          <div className="flex items-center gap-4">
            <AiOutlineCalendar className="text-2xl text-blue-600" />
            <span className="text-xl font-medium text-gray-600">Publish Year:</span>
            <span className="text-lg text-gray-800">{book.publishYear}</span>
          </div>

          <div className="flex items-center gap-4">
            <BiTimeFive className="text-2xl text-blue-600" />
            <span className="text-xl font-medium text-gray-600">Created At:</span>
            <span className="text-lg text-gray-800">{formatDate(book.createdAt)}</span>
          </div>

          <div className="flex items-center gap-4">
            <BiTimeFive className="text-2xl text-blue-600" />
            <span className="text-xl font-medium text-gray-600">Last Updated:</span>
            <span className="text-lg text-gray-800">{formatDate(book.updatedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBooks;
