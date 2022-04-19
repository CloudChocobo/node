import fetch from "node-fetch";

export function getByList(list) {
    return fetch('https://api.themoviedb.org/3/list/' + list +'?api_key=7248330eaedc659a3fb3ab4ff9069bc2&language=en-US')
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


