import React from 'react'
import logo from '../Images/Icons.png'

const Content = ({ weather, isLoading, onDate}) => {
    return (
        <>
        {!isLoading && (
            <div>
                <div className='sm:flex-row flex-col flex mt-4 justify-center items-center'>
                    <div className='p-5 flex justify-center items-center flex-col bg-white text-gray-500 rounded-xl'>
                        <img src={logo} alt='logo' width='150px' />
                        <h1 className='text-4xl'>{weather.weather[0].main}</h1>
                        <p>{weather.weather[0].description}</p>
                    </div>
                    <div className='text-center bg-white rounded-lg p-5 m-1'>
                        <h2 className='text-xl text-gray-600 pb-4 font-semibold'>Temperature</h2>
                        <h1 className='text-7xl font-bold text-blue-400 pb-1'>{weather.main.temp.toFixed(0)} &#8451;</h1>
                        <h2 className='text-4xl font-semibold text-gray-600'>{weather.name}, {weather.sys.country}</h2>
                        <h2 className='text-lg font-semibold text-gray-400'>{onDate}</h2>
                    </div>
                </div>
                        
                <div className='flex-col sm:flex-row flex justify-around mt-2'>
                    <div className='text-center bg-white p-2 rounded-md m-1 bg-opacity-75' >
                        <h2 className='text-lg text-gray-600'>Max temp</h2>
                        <h2 className='text-5xl text-blue-400'>{weather.main.temp_max.toFixed(0)} &#8451;</h2>
                        <p className='text-xs text-gray-600'>Maximum temperature at the moment</p>
                    </div>
                    <div className='text-center bg-white p-2 rounded-md m-1 bg-opacity-75' >
                        <h2 className='text-lg text-gray-600'>Min temp</h2>
                        <h2 className='text-5xl text-blue-400'>{weather.main.temp_min.toFixed(0)} &#8451;</h2>
                        <p className='text-xs text-gray-600'>Minimum temperature at the moment</p>
                    </div>
                    <div className='text-center bg-white p-2 rounded-md m-1 bg-opacity-75' >
                        <h2 className='text-lg text-gray-600'>Feels like</h2>
                        <h2 className='text-5xl text-blue-400'>{weather.main.feels_like.toFixed(0)} &#8451;</h2>
                        <p className='text-xs text-gray-600'>The human perception of weather</p>
                    </div>
                </div>
            </div>     
        )}
        </>
    )
}

export default Content
