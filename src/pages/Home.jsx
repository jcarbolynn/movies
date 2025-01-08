import MovieCard from "../components/movie_card"

function Home() {
    const movies = [
        {id: crypto.randomUUID(), title: "Harry Potter 1", release_date: "1998"},
        {id: crypto.randomUUID(), title: "Harry Potter 2", release_date: "2000"},
        {id: crypto.randomUUID(), title: "Harry Potter 3", release_date: "2002"}
    ]

    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    )
}

export default Home