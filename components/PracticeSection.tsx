
import React from 'react';
import { PRACTICE_LINKS } from '../constants';
import { PracticeCard } from './PracticeCard';

const GamepadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-3 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zm-4 5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
    </svg>
);


export const PracticeSection: React.FC = () => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-3xl font-bold text-emerald-600 mb-6 border-b-2 border-emerald-200 pb-3 flex items-center">
        <GamepadIcon />
        Time to Practice!
      </h2>
      <p className="text-lg text-slate-700 mb-8">
        You learned the rules. Now, test your knowledge with these fun games and activities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRACTICE_LINKS.map((link) => (
          <PracticeCard
            key={link.title}
            title={link.title}
            description={link.description}
            url={link.url}
            imageUrl={link.imageUrl}
            type={link.type}
          />
        ))}
      </div>
    </section>
  );
};
