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
}

const GamePage: React.FC = () => {
    const data = useLoaderData() as any;

    return (
        <div>
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-8">
                    {data.results.map((game: gameProps) => (
                        <Card key={game.id} coverImage={game.image_background} count={game.games_count} title={game.name} gamesCatalogue={game.games} />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default GamePage;
