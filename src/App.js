import React from "react"
import { useEffect } from "react"
import './App.css'
import './search.svg'

// d92b318 -> OMDB API key

const API_URL = 'http://www.omdbapi.com?apikey=d92b318'

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s={title}`)
        const data = await response.json()

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Spiderman')
    }, [])

    return (
        <div className="app">
            <h1>App</h1>
        </div>
    )
}

export default App