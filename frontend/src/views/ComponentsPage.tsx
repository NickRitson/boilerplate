import { Link } from 'react-router-dom';

type ComponentType = {
    title: string;
    description: string;
};

const Card: React.FC<ComponentType> = ({ title, description }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="w-1/2 px-8 py-4 border rounded-xl border-slate-500">
                <div className="flex flex-row items-center justify-between my-4">
                    <h4>{title}</h4>
                    <Link to="/components/table">
                        <button className="w-20 h-10 rounded-md bg-slate-300">View</button>
                    </Link>
                </div>
                <p dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
}

const ComponentPage: React.FC = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="my-8">
                        <h1 className="text-transparent bg-gradient-to-r from-cyan-200 to-lime-400 bg-clip-text">Components</h1>
                    </div>
                    <Card title="1. Data Table" description="Table component that displays data in a tabular format. It supports <strong>sorting, pagination, modal, clipboard</strong>" />
                </div>
            </div>
        </>
    );
};

export default ComponentPage;