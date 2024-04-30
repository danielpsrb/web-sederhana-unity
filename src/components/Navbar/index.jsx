import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-indigo-400'>
            <div className='flex md:flex-row flex-col justify-between p-4 items-center'>
                <Link to='/' className='font-bold text-2xl text-white'>DANS ANIME</Link>
                <input placeholder='cari anime..' className='w-80 md:w-auto p-2 pr-10' />
            </div>
        </header>
    )
}

export default Navbar