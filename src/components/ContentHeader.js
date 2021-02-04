import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import {dateBuilder} from '../DateBuilder'
import Content from './Content'

const api = {
    key: 'f98471ec8c8932d89674e9483cc67153',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const ContentHeader = () => {
    const [input, setInput] = useState('')
    const [query, setQuery] = useState('Jakarta')
    const [weather, setWeather] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [onError, setOnError] = useState(false)
    const [date, setDate] = useState('')
    const inputEl = React.useRef(null)

    const handleData = async () => {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api.key}`)
        const resJson = await res.json()
        if (res.status === 200) {
            setWeather(resJson)
            setIsLoading(false)
            setOnError(false)
        } else {
            setOnError(true)
            setIsLoading(false)
        }
    }
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        setQuery(input)
    }

    useEffect(() => {
        setIsLoading(true)
        handleData()
        inputEl.current.focus()
        setDate(dateBuilder(new Date))
    }, [query])
    
    return (
        <div className='text-white'>
            <div className='content-center flex justify-center items-center flex-col pt-20 pb-5'>
                <SearchBar handleSubmit={handleSubmit} setInput={setInput} inputEl={inputEl}/>
                {isLoading && 
                    <div className='text-xl p-2 mt-10 bg-blue-400 rounded-md'>
                        Loading... 
                    </div>
                }   
                {onError ? (
                    <div className='text-xl border-2 border-blue-400 text-blue-400 p-2 mt-10'>
                        City Is Not Found
                    </div>
                ) : (
                    <Content weather={weather} isLoading={isLoading} onDate={date} />
                )}
            </div>
        </div>
    )
}

export default ContentHeader
