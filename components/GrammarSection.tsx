
import React from 'react';

interface GrammarSectionProps {
  title: string;
  children: React.ReactNode;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({ title, children }) => {
  return (
    <section className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-slate-200">
      <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-3">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};
