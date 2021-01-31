import React from 'react'
import Home from '@material-ui/icons/Home'

const Header = () => {
    
    return (
        <div className='bg-blue-400 content-center flex justify-center fixed w-full top-0 z-10 '>
            <div className="flex justify-between items-center p-3 w-full max-w-screen-lg">
                <h2 className='text-2xl font-bold text-white'>Hello</h2>
                <span className='border-b-4 border-gray-600 text-white'>
                    <Home />
                </span>
            </div>
        </div>
    )
}

export default Header
