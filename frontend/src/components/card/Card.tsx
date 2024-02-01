import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { addGame, removeGame } from '../../redux/reducers/gameHistoryReducer';
import { Link } from 'react-router-dom';

import './Card.scss';

interface CardProps {
    coverImage: string;
    title: string;
    gamesCatalogue?: gamesArray[];
}

interface gamesArray {
    name: string;
    id: number;
}

const Card: React.FC<CardProps> = ({ coverImage, title, gamesCatalogue }) => {
    const games = useAppSelector((state) => state.gameHistory.games);
    const dispatch = useAppDispatch();

    return (
        <div className="card">
            <div className="flex flex-row items-center gap-4">
                <div>
                    <img src={coverImage} alt="Cover" className="object-cover h-48 rounded-md rounded-t-lg w-44" />
                </div>
                <div className="flex flex-col justify-between h-48">
                    <div className="flex flex-row justify-between">
                        <div>
                            <strong>
                                <h4 className="text-white">{title}</h4>
                            </strong>
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
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-1 gap-y-2">
                        {gamesCatalogue?.slice(0, 3).map((game, i) => {
                            const tagColors = ['#1d4ed8', '#047857', '#6d28d9', '#be185d'];
                            const tagColor = `${tagColors[i % tagColors.length]}`;

                            return (
                                <Link
                                    to={`/game/${game.id.toString()}`}
                                    key={game.name}
                                >
                                    <span style={{ backgroundColor: tagColor }} className="tag-name">
                                        {game.name}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                    <div>
                        <button className="view-button">view catalogue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
