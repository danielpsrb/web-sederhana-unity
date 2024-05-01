import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [theme, setTheme] = useState('system');
    const element = document.documentElement;

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

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;
        }
    }, [theme])

    return (
        <header className='bg-indigo-400'>
            <div className='flex md:flex-row flex-col justify-between p-4 items-center'>
                <Link to='/' className='font-bold text-2xl text-white'>DANS ANIME</Link>
                <div className='flex items-center'>
                    {options?.map(opt=>(
                        <button 
                            key={opt.text} 
                            onClick={()=>setTheme(opt.text)}
                            className={`w-8 h-8 leading-9 text-xl rounded-md m-1 mr-4 ${theme === opt.text && 'text-sky-500'} bg-slate-700`}
                        >
                            <ion-icon 
                                name={opt.icon}
                            ></ion-icon>
                        </button>
                    ))}
                    <input placeholder='cari anime..' className='w-80 md:w-auto p-2 pr-10' />
                </div>
            </div>
        </header>
    )
}

export default Navbar