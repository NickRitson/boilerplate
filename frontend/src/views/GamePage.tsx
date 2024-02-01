import { useLoaderData } from 'react-router-dom';

import './GamePage.scss';

const GamePage: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = useLoaderData() as any;

    console.log({ data });

    return (
        <div className="container mx-auto">
            <section className="pt-8">
                <div className="game-card">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col">
                            <img src={data.background_image} alt="game" className="h-full max-w-md" />
                        </div>
                        <div className="flex flex-col gap-4 py-8 pl-4 pr-8">
                            <div className="flex flex-row">
                                <h3 className="text-white text-bold">{data.name}</h3>
                            </div>
                            <div className="flex flex-row gap-4 text-white">
                                <div>Beaten: {data.added_by_status.beaten}</div>
                                <div>Owned: {data.added_by_status.owned}</div>
                                <div>Playing: {data.added_by_status.playing}</div>
                                <div>Dropped: {data.added_by_status.dropped}</div>
                            </div>
                            <div className="flex flex-row gap-4 text-white">
                                <div>Rating: {data.rating}</div>
                                <div>Metacritic: {data.metacritic}</div>
                                <div>Achievements: {data.achievements_count}</div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-8">
                <div dangerouslySetInnerHTML={{ __html: data.description.substring(0, 700) }} />
                {data.description.length > 700 &&
                    <button className="py-4">Read more</button>
                }
            </section>
        </div>
    );
}

export default GamePage;

