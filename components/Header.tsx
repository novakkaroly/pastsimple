
import React from 'react';

const BookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
);


export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 shadow-lg w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-center py-6">
          <BookIcon />
          <div className="ml-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Past Simple & Past Continuous</h1>
            <p className="text-indigo-200 text-lg">Your Guide for A2 English Learners</p>
          </div>
        </div>
      </div>
    </header>
  );
};
