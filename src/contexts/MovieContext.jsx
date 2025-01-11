import { createContext, useState, useContext, useEffect } from "react";
// provide global state and helper functions to be used in multiple areas of code

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// provide state to any of components wrapped inside it
// allows access to functions or state when needed
export const MovieProvider = ({children}) => {
    // put entire app inside this, lets entire app have access to this
    // similar to browser router, gives whole app ability to use / routes to navigate

    // children is reserved prop, anything inside the component rendered

    // logic and state related to favorite movies
    const [favorites, setFavorites] = useState([])

    // get local storage (in browser), local storage can only store strings
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites") // store items based on strings, like a key

        if (storedFavs) setFavorites(JSON.parse(storedFavs)) // JSON.parse takes the string and makes it a regular js array
    }, [])

    // when favorites state is changed, it will be updated in local storage
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    // now need 3 functions: add, delete, check favorites
    // add
    const addToFavorites = (movie) => {
        // use previous value of favorites state, add movie
        setFavorites(prev => [...prev, movie])
    }
    // remove
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    // is favorite
    const isFavorite = (movieId) => {
        // if movie is favorite, return true, else false
        return favorites.some(movie => movie.id === movieId)
    }

    // to make these functions and state accessible to things in the provider
    // create js object with all values we want to provide to the children
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}