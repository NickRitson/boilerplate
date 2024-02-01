interface ListCardProps {
    title?: string;
    list: {
        title: string;
        description: string;
    }[];
}

const PointCard: React.FC<{ point: { title: string; description: string; } }> = ({ point }) => {
    return (
        <div className="mb-6">
            <div className="flex flex-row items-center">
                <div className="flex flex-row items-center w-12">
                    <span className="p-1 rounded-md bg-neutral-800 dark:bg-neutral">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                    </span>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white nowrap">
                        {point.title}
                    </h4>
                </div>
            </div>
            <div className="flex flex-row items-center">
                <div className="ml-12">
                    <p className="text-neutral-400">
                        {point.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

const ListCard: React.FC<ListCardProps> = ({ title, list }) => {
    return (
        <div>
            {title &&
                <div className="flex items-center justify-center py-8">
                    <h2 className="font-bold text-white">
                        Our Sushi
                    </h2>
                </div>
            }
            <div className="flex flex-row gap-12">
                <div>
                    {list.slice(0, 2).map(point =>
                        <PointCard point={point} key={point.title} />
                    )}
                </div>
                <div>
                    {list.slice(2, 4).map(point =>
                        <PointCard point={point} key={point.title} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ListCard;