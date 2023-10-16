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
      store
    }
  },
  created(){
    //FILM AXIOS
    axios.get(store.apiUrlMovie+store.apiKey)
      .then( (res) => {
        store.moviesArray = res.data.results
      } )
      .catch( (err) => {
        console.log(err);
      });
    //sERIE TV AXIOS
    axios.get(store.apiUrlTv+store.apiKey)
      .then( (res) => {
        console.log(res.data.results);
        store.seriesTvArray = res.data.results
      } )
      .catch( (err) => {
        console.log(err);
      });
  }
}
</script>

<template>
  <SingleCard />
  <div class="container-cards">
    <h2>Serie tv</h2>
    <div class="cards-box" v-for="serieTv in store.seriesTvArray"
    :key="serieTv.id">
    {{ serieTv.name }}
    </div>

    <h2>Film</h2>
    <div class="cards-box" v-for="movie in store.moviesArray"
    :key="movie.id">
    {{ movie.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-cards{
  color: wheat;
  .cards-box{
    display: flex;
    flex-wrap: wrap;
    padding: 15px;
  }
}
</style>