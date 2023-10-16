import { reactive } from 'vue';

export const store = reactive(
  { 
    apiKey: '?api_key=653fb2aafd1c6e942991058c9f37e5b9',
    apiUrlTv: 'https://api.themoviedb.org/3/discover/tv',
    apiUrlMovie: 'https://api.themoviedb.org/3/discover/movie',
    moviesArray:[],
    seriesTvArray: []
  }
)