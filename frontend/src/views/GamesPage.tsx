import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from '../components/card/Card';

interface gameProps {
    id: number;
    name: string;
    description: string;
    image_background: string;
    games_count: number,
    games: gamesArray[];
}

interface gamesArray {
    name: string;
    id: number;
}

const GamePage: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = useLoaderData() as any;

    return (
        <div className="container mx-auto">
            <section>
            <h1 className="text-6xl font-bold text-center py-6 bg-gradient-to-r from-lime-400 to-lime-600 bg-clip-text text-transparent">
                    Game Publishers
                </h1>
            </section>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {data.results.map((game: gameProps) => (
                        <Card key={game.id.toString()} coverImage={game.image_background} count={game.games_count} title={game.name} gamesCatalogue={game.games} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default GamePage;
