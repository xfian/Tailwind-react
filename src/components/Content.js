import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Content = () => {
    return (
        <div className='p-3'>
            <div className='flex flex-col w-300 relative bg-blue-400 text-white rounded-md'>
                <div className='p-5'>
                    <h2 className='font-semibold text-2xl'>Hello World</h2>
                    <p className='text-md'>This is a pharagraf and example</p>
                </div>
                <div className='flex justify-around bg-gray-600'>
                    <span className='p-1 text-white'>
                        <AddCircleIcon />
                    </span>
                    <span className='p-1 text-white'>
                        <FavoriteIcon />
                    </span>
                    <span className='p-1 text-white'>
                        <ChatBubbleIcon />
                    </span>
                </div>
                <button className='px-4 py-2 bg-gray-700 rounded-b-md text-white font-bold btn'> New Button </button>
            </div>
        </div>
    )
}

export default Content
