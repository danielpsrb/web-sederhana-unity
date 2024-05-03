import React from 'react'

const HeaderTitle = ({title}) => {
    return (
        <div>
            <div className="sm:py-8 sm:px-4 py-4 px-2">
                <div className="overflow-hidden bg-[url(https://akamai-origin.myanimelist.net/images/anime/1770/97704l.webp)] object-cover p-8">
                    <h3 className="text-center text-xl font-bold text-white dark:text-[#7CFC00]">{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default HeaderTitle