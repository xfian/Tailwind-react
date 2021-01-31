import React, {useState} from 'react'
import Search from '@material-ui/icons/Search'

const ContentHeader = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <div className='bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white'>
            <div className='content-center flex justify-center items-center flex-col m-3 h-screen'>
                <div className='p-5 text-center'>
                    <h1 className='text-4xl'>Hello world and other!</h1>
                    <p>This is example of text</p>
                </div>
                <div className='flex justify-center items-center bg-white rounded-md'>
                    <input 
                        type='text' 
                        className='w-100 focus:outline-none text-gray-500 m-1 px-1 font-semi-bold transition-all duration-500 ease-in-out' />
                    <button className='text-black border-l-2 border-gray-300 w-auto p-1 rounded-r-md btn-search'>
                        <Search />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContentHeader
