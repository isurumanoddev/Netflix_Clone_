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
    getMovies(url, "#trending")
}

function getTopRated() {
    const url =
        'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

    getMovies(url, "#top_rated")
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
    // getOriginals()


}

//imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`

const getMovieTrailer = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`;

    try {
        const response = await fetch(url)
        const result = await response.json()
        console.log(result)

    }catch (error) {
        console.log(error)
    }

}

const setTrailer = (trailers) => {
    const iframe = document.getElementById("movieTrailer");
    const movieNotFound = document.querySelector(".movieNotFound");

    if (trailers.length > 0) {
        movieNotFound.classList.add('d-none');
        iframe.classList.remove('d-none');
        iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`;

    } else {
        iframe.classList.add('d-none')
    movieNotFound.classList.remove('d-none')
    }
};