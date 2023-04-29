const getMovies = async (url, dom_element) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        // console.log()
        showMovies(data["results"], dom_element)
    } catch (error) {
        console.log(error)
    }

};


function getOriginals() {
    const url =
        'https://p.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

    getMovies(url, ".original__movies")
}

function getTrendingNow() {
    const url =
        'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
    getMovies(url, ".original__movies")
}

function getTopRated() {
    const url =
        'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

    getMovies(url, ".original__movies")
}

const showMovies = (movies, dom_element) => {

    const movieEl = document.querySelector(dom_element);

    for (const movie of movies) {
        // console.log(movie["poster_path"])
        const posterImage = document.createElement("img");
        posterImage.setAttribute("data-id", movie["id"])
        posterImage.src = `https://image.tmdb.org/t/p/original${movie["poster_path"]}`
        movieEl.appendChild(posterImage)
    }


}

window.onload = () => {
    getTopRated()
    getTrendingNow()
    getOriginals()


}

//imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`