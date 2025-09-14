
import React from 'react';

interface ExampleBoxProps {
    children: React.ReactNode;
}

export const ExampleBox: React.FC<ExampleBoxProps> = ({ children }) => {
    return (
        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 my-4 rounded-r-lg text-lg text-slate-800">
            {children}
        </div>
    );
}
