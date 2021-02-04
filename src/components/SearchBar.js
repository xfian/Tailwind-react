import React from 'react'
import Search from '@material-ui/icons/Search'

const SearchBar = ({handleSubmit, setInput, inputEl }) => {
    return (
        <div>
            <div className='flex flex-row bg-white border-2 rounded-md mt-5'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            onChange={(e) => setInput(e.target.value)}
                            type='text' 
                            placeholder='Search city'
                            ref={inputEl}
                            required
                            className='w-100 focus:outline-none text-gray-500 m-1 p-1 font-semi-bold transition-all duration-500 ease-in-out' />
                        <button type='submit' className='text-black border-l-2 border-gray-300 w-auto p-2 rounded-r-md btn-search'>
                            <Search />
                        </button>
                    </form>
                </div>
        </div>
    )
}

export default SearchBar
