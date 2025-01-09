import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick(){
        alert("clicked")
    }

    return (
        <div ClassName="movie-card">
            <div ClassName="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div ClassName="movie-overlay">
                    <button ClassName="favorite-btn" onClick={onFavoriteClick}>
                        ♡
                    </button>
                </div>
            </div>
            <div ClassName="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
    )
}

export default MovieCard