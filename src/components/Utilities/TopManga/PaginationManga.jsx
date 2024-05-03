import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

const PaginationManga = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleGoToLastPage = () => {
        setPage(lastPage);
        scrollTop();
    }

    const handleGoToFirstPage = () => {
        setPage(1);
        scrollTop();
    }

    return (
        <div className="flex flex-col items-center py-4 px-2 text-color-primary text-2xl">
            <div className="flex gap-4">
                {page > 1 && (
                    <button onClick={handlePrevPage} className="transition-all hover:text-[#00FFFF]"><FontAwesomeIcon icon={faBackward} title='Previous Page' /></button>
                )}
                <p>{page} of {lastPage}</p>
                {page < lastPage && (
                    <button onClick={handleNextPage} className="transition-all hover:text-[#00FFFF]"><FontAwesomeIcon icon={faForward} title='Next Page' /></button>
                )}
            </div>
            {page === lastPage && (
                <button onClick={handleGoToFirstPage} className="mt-2 transition-all hover:text-[#00FFFF]">Go to First Page</button>
            )}
            {page < lastPage && (
                <button onClick={handleGoToLastPage} className="mt-2 transition-all hover:text-color-[#00FFFF]">Go to Last Page</button>
            )}
        </div>
    )
}

export default PaginationManga