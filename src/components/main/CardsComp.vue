<script>
import axios from 'axios';
import { store } from '../../data/store'

import SingleCard from './SingleCard.vue';
export default {
  name: 'CardsComp',
  components: { 
    SingleCard
  },
  data(){
    return{
      store,
      doSearch: store.doSearch
    }
  },
  watch:{
    'store.doSearch'(){
      this.getApi();
      console.log(store.selectedByTxt)
      store.doSearch = false
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrlMovie, {
        params:{
          api_key: store.apiKey,
          query: store.selectedByTxt
        }
      })
      .then( (res) => {
        store.moviesArray = res.data.results
      } )
      .catch( (err) => {
        console.log(err);
      });
    //sERIE TV AXIOS
    axios.get(store.apiUrlTv, {
        params:{
          api_key: store.apiKey,
          query: store.selectedByTxt
        }
      })
      .then( (res) => {
        console.log(res.data.results);
        store.seriesTvArray = res.data.results
      } )
      .catch( (err) => {
        console.log(err);
      });
    }
  }
}

</script>

<template>
  <h2 v-if="store.seriesTvArray < 1">Cerca un film o una serie</h2>
  <div v-else>
    <h2>Serie tv</h2>
    <div class="container-cards">
      <SingleCard 
        class="cards-box"
        v-for="serieTv in store.seriesTvArray"
        :key="serieTv.id"
        :propriety="serieTv"
      />
    </div>
  
    <h2>Film</h2>
    <div class="container-cards">
      <SingleCard 
        class="cards-box"
        v-for="movie in store.moviesArray"
        :key="movie.id"
        :propriety="movie"
        />
    </div>
  </div>

  
</template>

<style lang="scss" scoped>

h2{
  color: wheat;
  font-size: 3.5rem;
}
.container-cards{
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
  .cards-box{
    height: 500px;
    width: calc(100% / 6 - 50px);
    background-color: #c0000d;
    margin: 25px;
    border-radius: 5px;
    box-shadow: 5px 10px 10px black;
    color: white;
    &:hover{
      scale: 1.1;
    }
  }
}
</style>