import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="relative border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between"
        onClick={() => setShowModal(true)}
      >
        {/* Publish Year Badge */}
        <span className="absolute top-5 right-4 bg-blue-100 text-blue-800 px-2 py-1 text-xs font-semibold rounded-full shadow">
          {book.publishYear}
        </span>

        {/* Book Title and Author */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <PiBookOpenTextLight className="text-blue-500 text-3xl" aria-label="Book Icon" />
            <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <BiUserCircle className="text-blue-500 text-2xl" aria-label="Author Icon" />
            <p className="text-gray-600 text-sm">{book.author}</p>
          </div>
        </div>

        {/* Action Icons - Permanently Visible */}
        <div className="flex justify-around items-center mt-4 pt-2 border-t">
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation(); // Prevents triggering the modal
              setShowModal(true);
            }}
          >
            <BiShow className="text-2xl text-blue-600 group-hover:text-blue-800 transition-colors" aria-label="View Icon" />
            <span className="text-xs text-gray-500 mt-1">View</span>
          </div>

          <Link
            to={`/books/details/${book._id}`}
            className="flex flex-col items-center group"
            onClick={(e) => e.stopPropagation()}
          >
            <BsInfoCircle className="text-2xl text-green-600 group-hover:text-green-800 transition-colors" aria-label="Info Icon" />
            <span className="text-xs text-gray-500 mt-1">Info</span>
          </Link>

          <Link
            to={`/books/edit/${book._id}`}
            className="flex flex-col items-center group"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineEdit className="text-2xl text-yellow-500 group-hover:text-yellow-700 transition-colors" aria-label="Edit Icon" />
            <span className="text-xs text-gray-500 mt-1">Edit</span>
          </Link>

          <Link
            to={`/books/delete/${book._id}`}
            className="flex flex-col items-center group"
            onClick={(e) => e.stopPropagation()}
          >
            <MdOutlineDelete className="text-2xl text-red-500 group-hover:text-red-700 transition-colors" aria-label="Delete Icon" />
            <span className="text-xs text-gray-500 mt-1">Delete</span>
          </Link>
        </div>
      </div>

      {/* Modal for Viewing Book Details */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default BookSingleCard;
