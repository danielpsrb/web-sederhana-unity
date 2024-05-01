import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4'>
            <h1 className='md:text-xl font-medium'>Paling Populer</h1>
            <Link to='/populer' className='md:text-xl text-md'>Lihat Semua Anime</Link>
        </div>
    )
}

export default Header