import fetch from "node-fetch";

export function getByList(list) {
    return fetch('https://api.themoviedb.org/3/list/' + list +'?api_key=e16db24e957d54404f73c39059c535f7&language=en-US')
.then(response => response.json())
}

export function getListByTitle(movieList = []) {
    let listing = movieList.items.map(movie => {
        return {
            title: movie.title
        }
    })
    return listing;
}


