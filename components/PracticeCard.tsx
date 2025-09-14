
import React from 'react';
import type { PracticeLink } from '../constants';

type PracticeCardProps = PracticeLink;

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

const getTypeStyles = (type: PracticeLink['type']) => {
    switch(type) {
        case 'Reading': return 'bg-blue-100 text-blue-800';
        case 'Quiz': return 'bg-yellow-100 text-yellow-800';
        case 'Game': return 'bg-green-100 text-green-800';
        case 'Story': return 'bg-purple-100 text-purple-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ title, description, url, imageUrl, type }) => {
  return (
    <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-slate-200">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
        <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${getTypeStyles(type)}`}>
            {type}
        </span>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 flex-grow mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-emerald-500 text-white font-semibold rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
        >
          Start Activity
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
};
