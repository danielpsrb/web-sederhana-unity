import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    const backBtn = () => {
        navigate(-1)
    }
    
  return (
    <div className='min-h-screen max-w-xl mx-auto flex justify-center items-center'>
        <div className='flex justify-center items-center gap-4 flex-col text-red-500 text-6xl'>
            <ion-icon name="warning-outline"></ion-icon>
            <h3 className='text-4xl font-semibold'>404 - Page Not Found</h3>
            <button className='text-2xl text-black dark:text-white hover:underline' onClick={backBtn}>Back</button>
        </div>
    </div>
  )
}

export default NotFound