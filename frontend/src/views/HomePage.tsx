import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="bg container mx-auto">
            <h1 className="text text-6xl font-bold text-center mt-8">
                React <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">Boilerplate</span> and <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Playground</span>
            </h1>
        </div>
    );
};

export default HomePage;
