<script>
import axios from 'axios';
import { store } from '../../data/store'

import SingleCardMovie from './SingleCardMovie.vue';
import SingleCardTv from './SingleCardTv.vue';
export default {
  name: 'CardsComp',
  components: { 
    SingleCardTv,
    SingleCardMovie
  },
  data(){
    return{
      store,
      seriesTvArray: []
    }
  },
  created(){
    //sERIE TV AXIOS
    axios.get(store.apiUrlTv+store.apiKey)
      .then( (res) => {
        console.log(res.data.results);
        this.seriesTvArray = res.data.results
      } )
      .catch( (err) => {
        console.log(err);
      });
  }
}
</script>

<template>
  <div class="container-cards">
    <h2>Serie tv</h2>
    <div class="cards-box tv" v-for="serieTv in seriesTvArray"
    :key="serieTv.id">
    {{ serieTv.name }}
    </div>

    <h2>Film</h2>
    <div class="cards-box movie">
    <SingleCardMovie />
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