
import React from 'react';
import { Link } from "react-router-dom";

import Toggle from '../toggle/Toggle';

const Navbar: React.FC = () => {
    return (
            <nav>
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
