import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:bg-blue-700 transition-colors duration-200 shadow-md"
      >
        <BsArrowLeft className="text-xl" />
        <span className="text-sm font-medium">Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
