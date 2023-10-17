import { reactive } from 'vue';

export const store = reactive(
  { 
    apiKey: '653fb2aafd1c6e942991058c9f37e5b9',
    apiUrlTv: 'https://api.themoviedb.org/3/search/tv',
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie',
    moviesArray:[],
    seriesTvArray:[],
    selectedByTxt: '',
    doSearch: false
  }
)