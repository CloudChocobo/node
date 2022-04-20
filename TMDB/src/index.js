
import { getMovieDetailOmdb, compare} from './omdbAPI.js';
import {getByList, getListByTitle} from './tmdbAPI.js'

//console.log(await getByList(1));


const movieListApi = await getByList(2)
const movieTitleList = getListByTitle(movieListApi);
console.log(movieTitleList);

const movieDetailTitleList = await getMovieDetailOmdb(movieTitleList)
const movieDetail = []
for(let movieInfo of movieDetailTitleList) {
    const detail = await movieInfo
    movieDetail.push(detail)
}
console.log(movieDetail)


console.log(compare(movieDetail))