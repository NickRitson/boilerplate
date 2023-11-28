
import React from 'react';

interface CardProps {
    coverImage: string;
    title: string;
    tags?: tagsArray[];
}

interface tagsArray {
    name: string;
}

const Card: React.FC<CardProps> = ({ coverImage, title, tags }) => {
  return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img src={coverImage} alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <div className="flex flex-wrap gap-x-1 gap-y-2">
                    {tags?.slice(0, 3).map((tag) => (
                        <span className="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{tag.name}</span>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default Card;
