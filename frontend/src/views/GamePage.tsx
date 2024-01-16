import { useLoaderData } from "react-router-dom";

const GamePage: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = useLoaderData() as any;

    return (
        <div className="container mx-auto">
            <div className="bg-gray-300 border border-slate-200 drop-shadow-md">
                <div className="flex flex-row gap-2">
                    <div>
                        <img src={data.background_image} alt="game" className="h-full max-w-md rounded-r-lg" />
                    </div>
                    <div className="p-6">
                    <h2 className="text-2xl font-bold">{data.name}</h2>
                    <p className="text-gray-600">{data.description.replace(/(<([^>]+)>)/gi, "")}</p>
                    <div className="flex justify-between mt-4">
                        <div>
                            <span className="text-gray-500">Rating:</span> {data.rating}
                        </div>
                        <div>
                            <span className="text-gray-500">Metacritic:</span> {data.metacritic}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default GamePage;

