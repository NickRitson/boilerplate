import React from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addGame, removeGame, clearState } from '../../redux/reducers/gameHistoryReducer';

interface CardProps {
    coverImage: string;
    title: string;
    count: number;
    gamesCatalogue?: gamesArray[];
}

interface gamesArray {
    name: string;
}

const Card: React.FC<CardProps> = ({ coverImage, title, count, gamesCatalogue }) => {
    const games = useAppSelector((state) => state.gameHistory.games);
    const dispatch = useAppDispatch();

    return (
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img src={coverImage} alt="Cover" className="w-full h-48 object-cover rounded-t-lg" />
                </div>
                <div className="flex flex-col justify-around gap-2 p-6">
                    <div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {title}
                                </h5>
                            </div>
                            <div>
                                {!games.includes(title) &&
                                    <button onClick={() => dispatch(addGame(title))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </button>
                                }
                                {games.includes(title) &&
                                    <button onClick={() => dispatch(removeGame(title))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color='red' className="w-6 h-6">
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                        </svg>
                                    </button>
                                }
                                {/* <button onClick={() => dispatch(clearState())}>Clear</button> */}
                            </div>
                        </div>
                        <p>Games in catalogue: {count}</p>
                    </div>
                    <div className="flex flex-wrap gap-x-1 gap-y-2">
                        {gamesCatalogue?.slice(0, 3).map((game) => (
                            <span key={game.name} className="w-max bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{game.name}</span>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Card;
