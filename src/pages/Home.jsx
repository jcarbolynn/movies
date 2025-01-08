import MovieCard from "../components/movie_card"
import {useState} from "react"

function Home() {
    // when state changes, component will re render
    // name of state, function to change state, default value of state
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: crypto.randomUUID(), title: "Harry Potter 1", release_date: "1998"},
        {id: crypto.randomUUID(), title: "Harry Potter 2", release_date: "2000"},
        {id: crypto.randomUUID(), title: "Harry Potter 3", release_date: "2002"}
    ]

    const handleSearch = (e) => {
        e.preventDefault() // prevents default behavior of reloading page
        alert(searchQuery)
        setSearchQuery("-----")
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
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home