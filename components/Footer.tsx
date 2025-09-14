import React from 'react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-800 text-slate-400 mt-12 py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="mb-2">&copy; {currentYear} EFL Learning Studio. Happy studying!</p>
                <div className="text-sm">
                    <p>Have questions or feedback? Contact us:</p>
                    <a href="mailto:contact@efl-learning.com" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                        contact@efl-learning.com
                    </a>
                </div>
            </div>
        </footer>
    );
};
