import React from 'react';

export default function Card({ title, content }) {
    return (
        <div className="bg-slate-600 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
            <div className='text-white'>{content}</div>
        </div>
    );
}
