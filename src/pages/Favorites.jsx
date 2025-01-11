import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/movie_card"

function Favorite() {

    const {favorites} = useMovieContext();

    if (favorites) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="favorites-grid">
                    {favorites.map(
                        (movie) => (
                            (
                                <MovieCard movie={movie} key={movie.id}/>
                            )
                    ))}
                </div>
            </div>
        );
    }

    // return (
    //     <div className="favorites-empty">
    //         <h2>No Favorite Movies Yet</h2>
    //         <p>Start adding movies to your favorites and they will appear here</p>
    //     </div>
    // )
}

// npm install react-router-dom
// adds to package.json and in node-modules
// need to wrap react components with something that gives ability to route
// (go to main.jsx)

export default Favorite