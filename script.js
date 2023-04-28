const getMovies = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()

        // console.log()
        showMovies(data["results"])
    } catch (error) {
        console.log(error)
    }

};


function getOriginals() {
    const url =
        'https://p.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

    getMovies(url)
}

function getTrendingNow() {
    const url =
        'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';
    getMovies(url)
}

function getTopRated() {
    const url =
        'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

    getMovies(url)
}

