import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { DateTime } from 'luxon'; // Import Luxon's DateTime

// Helper function to format date using Luxon
const formatDate = (dateString) => {
  return DateTime.fromISO(dateString).toLocaleString(DateTime.DATETIME_MED); 
};

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto w-full bg-gray-100 rounded-md shadow-lg">
      <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-4 font-semibold text-sm text-center">Sl.No</th>
            <th className="p-4 font-semibold text-sm text-center">Title</th>
            <th className="p-4 font-semibold text-sm text-center max-md:hidden">Author</th>
            <th className="p-4 font-semibold text-sm text-center max-md:hidden">Published Year</th>
            <th className="p-4 font-semibold text-sm text-center max-md:hidden">Created At</th>
            <th className="p-4 font-semibold text-sm text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="bg-white hover:bg-gray-50 transition-colors border-b border-gray-200"
            >
              <td className="p-4 text-center text-gray-700 font-medium">{index + 1}</td>
              <td className="p-4 text-center text-gray-800 font-semibold">{book.title}</td>
              <td className="p-4 text-center text-gray-600 max-md:hidden">{book.author}</td>
              <td className="p-4 text-center text-gray-600 max-md:hidden">{book.publishYear}</td>
              <td className="p-4 text-center text-gray-600 max-md:hidden">
                {formatDate(book.createdAt)}
              </td>
              <td className="p-4 text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/books/details/${book._id}`} className="group relative">
                    <BsInfoCircle className="text-xl text-green-500 hover:text-green-700 transition-colors" />
                    <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300">
                      View Details
                    </span>
                  </Link>
                  <Link to={`/books/edit/${book._id}`} className="group relative">
                    <AiOutlineEdit className="text-xl text-yellow-500 hover:text-yellow-700 transition-colors" />
                    <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300">
                      Edit Book
                    </span>
                  </Link>
                  <Link to={`/books/delete/${book._id}`} className="group relative">
                    <MdOutlineDelete className="text-xl text-red-500 hover:text-red-700 transition-colors" />
                    <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs rounded-md px-2 py-1 transition-opacity duration-300">
                      Delete Book
                    </span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
