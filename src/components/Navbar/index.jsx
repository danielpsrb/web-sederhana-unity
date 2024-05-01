import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputSearchAnime from './InputSearchAnime';

const Navbar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const options = [
        {
            icon: "sunny",
            text: "light",
        },
        {
            icon: "moon",
            text: "dark",
        },
        {
            icon: "settings-outline",
            text: "system",
        }
    ];

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark');
        } else {
            element.classList.remove('dark');
        }
    }
    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch();
                break;
        }
    }, [theme]);

    return (
        <header className='bg-indigo-400 dark:bg-[#FE8040]'>
            <div className='flex lg:flex-row flex-col justify-between p-4 items-center'>
                <Link to='/' className='font-bold text-2xl text[#cccccc]'>DANS_ANIMELIST</Link>
                <div className='flex items-center flex-col lg:flex-row'>
                    <InputSearchAnime />
                    <div className="lg:flex items-center">
                        {options.map(opt => (
                            <button
                                key={opt.text}
                                onClick={() => setTheme(opt.text)}
                                className={`w-8 h-8 leading-9 text-xl rounded-md m-1 ${theme === opt.text && 'text-sky-500'} bg-[#FDFDFD] dark:bg-[#333] dark:text-[#f0f0f0]`}
                            >
                                <ion-icon
                                    name={opt.icon}
                                ></ion-icon>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
