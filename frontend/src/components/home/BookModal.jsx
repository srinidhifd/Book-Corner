import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[90%] max-w-2xl bg-white rounded-2xl p-6 flex flex-col relative shadow-xl animate-zoomIn transition-all duration-300"
      >
        {/* Close Button with Tooltip */}
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors text-2xl"
          onClick={onClose}
          title="Close"
        >
          <AiOutlineClose />
        </button>

        {/* Book Information Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <PiBookOpenTextLight className="text-blue-500 text-3xl" />
            <h2 className="text-2xl font-semibold text-gray-800">{book.title}</h2>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <BiUserCircle className="text-blue-500 text-2xl" />
            <h3 className="text-lg text-gray-600">{book.author}</h3>
          </div>
          <h4 className="w-fit px-3 py-1 bg-blue-100 text-blue-700 font-medium rounded-lg text-sm">
            Published in {book.publishYear}
          </h4>
        </div>

        {/* Separator */}
        <hr className="my-4 border-gray-300" />

        {/* Scrollable Content Area for Description */}
        <div className="overflow-y-auto max-h-60 pr-4">
          <h5 className="text-gray-700 font-semibold mb-2">About this Book</h5>
          <p className="text-gray-600 leading-relaxed text-sm">
            {book.description || "No additional information available for this book."}
          </p>
        </div>

        {/* Divider for Extra Information */}
        <hr className="my-4 border-gray-300" />
      </div>
    </div>
  );
};

export default BookModal;
