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

const GamePage: React.FC = () => {
    const data = useLoaderData() as any;

    return (
        <div>
            <h1>Games</h1>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
                    {data.results.map((game: gameProps) => (
                        <Card key={game.id} coverImage={game.background_image} title={game.name} tags={game.tags} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default GamePage;
