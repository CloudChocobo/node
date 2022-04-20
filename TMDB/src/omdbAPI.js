import fetch from 'node-fetch';


 export function getMovieDetailOmdb(movieTitleList) {
    return movieTitleList.map(movie => {
        return fetch('http://www.omdbapi.com/?apikey=d85f0b05&t=' + movie.title)
        .then(response => response.json())
        //.then(response => console.log(response))
    })
}

export function compare(sortTitle){
    sortTitle.sort((a,b) => {
        if (a.Title < b.Title){
        return 1;}else if (a.Title > b.Title){
        return -1;} else {
        return 0;}
    });
    return sortTitle
    }