
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from '../components/card/Card';

interface gameProps {
    id: number;
    name: string;
    description: string;
    background_image: string;
    tags: tagsArray[];
}

interface tagsArray {
    name: string;
}

const Homepage: React.FC = () => {
    const data = useLoaderData() as any;

    return (
        <div className="bg container mx-auto">
            <h1 className="text text-6xl font-bold text-center mt-8">
                React <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">Boilerplate</span> and <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Playground</span>
            </h1>
            <p className="text-4xl text-primary">Hello world</p><p className="text-4xl text-neon-primary">Tailwind hate me sometimes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
                {data.results.map((game: gameProps) => (
                    <Card key={game.id} coverImage={game.background_image} title={game.name} tags={game.tags} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;
