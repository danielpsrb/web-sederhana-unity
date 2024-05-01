import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ title, linkTitle, linkHref }) => {
    return (
        <div className='flex justify-between items-center p-4'>
            <h1 className='md:text-2xl font-medium'>{title}</h1>
            {
                linkHref && linkTitle
                ?
                <Link to={linkHref} className='md:text-xl text-md underline'>{linkTitle}</Link>
                :
                null
            }
        </div>
    )
}

export default Header