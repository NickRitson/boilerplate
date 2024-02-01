import { useLoaderData } from 'react-router-dom';

import Card from '../components/card/Card';
import characterImage from '../assets/images/character.png';

import './GamesPage.scss';

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
        <div>
            <section className="container pt-8 mx-auto text-center">
                <h1 className="pt-3 pb-1 text-6xl font-bold text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text">
                    Game Publishers
                </h1>
                <small className="text-black title-source">source: <a href="https://rawg.io/" target="_blank">https://rawg.io/</a></small>
            </section>

            <section className="container mx-auto section-image-gaming h-[30rem]">
                <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {data.results.slice(0,6).map((game: gameProps) => (
                        <Card key={game.id.toString()} coverImage={game.image_background} count={game.games_count} title={game.name} gamesCatalogue={game.games} />
                    ))}
                </div>
            </section>

            <section className="py-2 h-[54rem] mt-[20rem]">
                <div className="flex items-center bg-yellow-400 h-96 section-image-genshin">
                    <div className="container mx-auto">
                        <div className="grid items-center justify-center grid-cols-2 gap-4">
                            <div>
                                <img className="relative" src={characterImage} alt="gaming" />
                            </div>
                            <div>
                                <h3 className="pb-4">Immerse Yourself in the Enchanting World of Genshin Impact!</h3>
                                <p>
                                Embark on an unforgettable journey through Teyvat, a breathtaking world crafted with meticulous detail and vibrant landscapes that will leave you awe-inspired. Genshin Impact, not just a game, but a visual masterpiece that brings characters to life with unparalleled design and charisma.
                                </p>
                                <div className="flex flex-row justify-between gap-4 mt-4">
                                    <div className="flex flex-row gap-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
                                        </div>
                                        <div>
                                            A World Ready to Explore
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/></svg>
                                        </div>
                                        <div>
                                            Action Combat
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                                        </div>
                                        <div>
                                            Unique Characters
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GamePage;
