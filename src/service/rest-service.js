const BASE_URL = 'https://api.themoviedb.org/3';

const get = (url) => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url + import.meta.env.VITE_API_KEY, {
            method: 'GET',
            headers: { accept: 'application/json' }
        })
        .then( response => response.json() )
        .then( json => resolve(json) )
        .catch( () => reject() )
    })
}

const getMoviesByGenreId = (url, genreID) => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url + import.meta.env.VITE_API_KEY +
             '&with_genres=' + genreID, {
            method: 'GET',
            headers: { accept: 'application/json' }
        })
        .then( response => response.json() )
        .then( json => resolve(json) )
        .catch( () => reject() )
    })
}

const getMovieDetailByMovieId = (url, movieID) => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + url + movieID + import.meta.env.VITE_API_KEY , {
            method: 'GET',
            headers: { accept: 'application/json' }
        })
        .then( response => response.json() )
        .then( json => resolve(json) )
        .catch( () => reject() )
    })
}

const restService = {
    get,
    getMoviesByGenreId,
    getMovieDetailByMovieId
}

export default restService;

