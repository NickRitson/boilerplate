import ModelCanvas from '../components/3d/ModelCanvas';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto bg">
            <ModelCanvas />
            <h1 className="mt-8 text-6xl font-bold text-center">
                React <span className="text-transparent bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text">Boilerplate</span> and <span className="text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">Playground</span>
            </h1>
            <div className="flex justify-center my-8">
                Vite - React - TailwindCSS - Redux - TypeScript - ESLint - Jest
            </div>
        </div>
    );
};

export default HomePage;
