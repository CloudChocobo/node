import fetch from 'node-fetch';


 export function getMovieDetailOmdb(movieTitleList) {
    return movieTitleList.map(movie => {
        return fetch('http://www.omdbapi.com/?apikey=d85f0b05&t=' + movie.title)
        .then(response => response.json())
        //.then(response => console.log(response))
    })
}

