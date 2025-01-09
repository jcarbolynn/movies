import { useState, useEffect } from "react"
import MovieCard from "../components/movie_card"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api";


function Home() {
    // when state changes, component will re render
    // name of state, function to change state, default value of state
    const [searchQuery, setSearchQuery] = useState("");
    // useEffect so we control when something is called
    // ex we dont want getpopularmovies to be called every time the component renders
    // only want it called once at the beginning (popular movies list isnt changing)
    const [movies, setMovies] = useState([]);
    // movies is a state, any time movies list is updated it will rerender the component
    // common to have 2 variables
    // one to store the "loading state"
    // one to store potential errors
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // give use effect the function you want called anytime the array changes
    // whatever is in the dependency array will be re checked after each render
    // if it has changed since last render, we will run useEffect function
    // if dependency array is empty, it will only be run once (when component is rendered)
    // when state changes occurr, this useEffect will NOT run because nothing has changed in deendency array
    useEffect(() => {
        // common when you want to call an api to fetch data
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)  // using useState function
            } catch (error) {
                console.log(error)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false) // no longer loading whether data was retrieved successfully or not
            }
        }

        loadPopularMovies()
        // call api and loads movies
    }, [])

    const handleSearch = (e) => {
        e.preventDefault() // prevents default behavior of reloading page
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    // when you set value to a state, have to set on change to
                    // when state changes by calling on change (setsearchquery function), whole component is rerendered
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                    (movie) => (
                        (
                            <MovieCard movie={movie} key={movie.id}/>
                        )
                ))}
            </div>
        </div>
    )
}

export default Home