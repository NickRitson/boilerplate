import { useState } from 'react';

import Counter from '../components/counter/Counter';

const TechStackPage: React.FC = () => {
    const [hovered, setHovered] = useState(false);
    /* useHover is better, this is for example only. Seperating into new component is viable too */
    const handleHover = (hovered: boolean) => {
        setHovered(hovered);
    }

    return (
        <div>
            <section className="my-6">
                <h1 className="text-6xl font-bold text-center py-6 bg-gradient-to-r from-purple-400 to-pink-300 dark:bg-gradient-to-r dark:from-yellow-500 dark:to-yellow-300 dark:bg-clip-text dark:text-transparent bg-clip-text text-transparent">
                    TECH IN THIS PROJECT
                </h1>
                <p className="text-center mb-12">hover cards for example components (use redux example)</p>
            </section>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">Vite</h2>
                        <p>Vite is a fast build tool for modern web applications. It offers near-instantaneous hot module replacement (HMR) and optimized production builds, making it an excellent choice for efficient development and performance-focused projects.</p>
                    </div>
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">React</h2>
                        <p>React is a popular JavaScript library for building user interfaces. It allows developers to create reusable UI components, manage state efficiently, and build interactive web applications with ease.</p>
                    </div>
                    <div id="redux" className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
                        {hovered ?
                        <Counter /> :
                        <div>
                            <h2 className="text-4xl font-bold pb-4">Redux</h2>
                            <p>Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.</p>
                        </div>
                        }
                    </div>
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">TailwindCSS</h2>
                        <p>Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.</p>
                    </div>
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">Typescript</h2>
                        <p>Statically typed superset of JS, with enhanced tooling, improved code maintainability, and increased productivity. Offers static type checking and improved code navigation, making it a valuable choice for building scalable and robust applications.</p>
                    </div>
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">Jest</h2>
                        <p>Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.</p>
                    </div>
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">Vercel</h2>
                        <p>Vercel is a cloud platform for static sites. It enables developers to host Jamstack websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.</p>
                    </div>
                    <div className="border border-slate-400 bg-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md p-4">
                        <h2 className="text-4xl font-bold pb-4">CI / CD</h2>
                        <p>Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.</p>
                    </div>
                </div>
                <section className="my-12">
                    <div>
                        <p className="font-bold">Site Status: <span><a href="https://freelance-3.betteruptime.com" target="_blank">check status</a></span></p>
                        <hr />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TechStackPage;
