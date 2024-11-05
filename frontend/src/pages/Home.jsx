import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {loading && <Spinner />}

      {/* View Toggle Buttons */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
            showType === 'table' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
            showType === 'card' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>

      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Books List</h1>
        <Link
          to="/books/create"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          <MdOutlineAddBox className="text-2xl" />
          <span className="text-lg font-medium">Add Book</span>
        </Link>
      </div>

      {/* Content Display */}
      <div className="bg-white shadow-lg rounded-lg p-6 min-h-[400px]">
        {loading ? (
          <Spinner />
        ) : books.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <p className="text-lg font-medium">No books available</p>
            <p className="text-sm mt-2">Click "Add Book" to create a new entry.</p>
          </div>
        ) : showType === 'table' ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>
    </div>
  );
};

export default Home;
