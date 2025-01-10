// javascript functions to call api 
// good practice to have one file with all api calls (easy access) 

const API_KEY = ""
const BASE_URL = "https://api.themoviedb.org/3"

// use api to search movies and display popular movies

// asynch means it will take a second to get result
// code written here, call function from component, wait until get result, display result
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json()
    return data.results
}