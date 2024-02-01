import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";

import Toggle from '../toggle/Toggle';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const locationRef = useRef(location.pathname);

    useEffect(() => {
        if (location.pathname !== locationRef.current) {
            locationRef.current = location.pathname;
            setIsOpen(false);
        }
    }, [location]);

    const pagesDropdown = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="bg-white">
            <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-screen-2xl">
                <span className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mt-1">
                        <path fillRule="evenodd" d="M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z" clipRule="evenodd" />
                    </svg>
                    <Link to="/">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NickRitson</span>
                    </Link>
                </span>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                    <ul className="flex flex-col p-4 mt-4 font-medium md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
                        <li>
                            <Link to="/" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Home
                            </Link>
                        </li>
                        <li>
                            <button onClick={pagesDropdown} className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Pages
                            </button>
                            {isOpen &&
                                <div className="absolute z-10 gap-4 mt-4 border rounded-md bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700">
                                    <div className="flex flex-row">
                                        <div className="flex flex-col justify-center">
                                            <ul>
                                                <li className="border-b border-neutral-200 dark:border-neutral-800">
                                                    <Link to="/sushi" className="text-gray-900 bg-blue-500 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                                        <span className="flex gap-2 px-2 py-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rainbow"><path d="M22 17a10 10 0 0 0-20 0"/><path d="M6 17a6 6 0 0 1 12 0"/><path d="M10 17a2 2 0 0 1 4 0"/></svg>
                                                            Sushi
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/crypto" className="block px-3 py-4 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                                        <span className="flex gap-2 px-2 py-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
                                                            Crypto
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <ul>
                                                <li className="border-b border-neutral-200 dark:border-neutral-800">
                                                    <Link to="/games" className="text-gray-900 bg-blue-500 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                                        <span className="flex gap-2 px-2 py-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gamepad-2"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
                                                            Gaming
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog" className="block px-3 py-4 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                                        <span className="flex gap-2 px-2 py-4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                                                            Blog
                                                        </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            }
                        </li>
                        <li>
                            <Link to="/tech-stack" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Tech Stack
                            </Link>
                        </li>
                        <li>
                            <Link to="/games" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Mock Data (server)
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                AI
                            </Link>
                        </li>
                        <li>
                            <Link to="/playground" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Playground
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="block px-3 py-2 text-gray-900 rounded md:p-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white">
                                Documentation
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center md:order-2">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 rounded-lg cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                        English (US)
                    </button>
                    <Toggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
