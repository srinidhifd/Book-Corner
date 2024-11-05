import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
const CreateBooks = lazy(() => import('./pages/CreateBooks'));
const DeleteBooks = lazy(() => import('./pages/DeleteBooks'));
const DisplayBooks = lazy(() => import('./pages/DisplayBooks'));
const EditBooks = lazy(() => import('./pages/EditBooks'));

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
    <p className="text-lg mb-6">The page you are looking for does not exist.</p>
    <a href="/" className="text-blue-600 hover:text-blue-800">Go Back to Home</a>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<DisplayBooks />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
