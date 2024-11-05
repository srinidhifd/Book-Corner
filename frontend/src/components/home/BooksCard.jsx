import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className="p-6">
      {/* Empty State */}
      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-10">
          <p className="text-lg font-semibold">No books available</p>
          <p className="text-sm mt-2">Try adding some books to see them here.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {books.map((item) => (
            <BookSingleCard key={item._id} book={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksCard;
