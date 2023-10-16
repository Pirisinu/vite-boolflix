<script>
import axios from 'axios';
import { store } from '../../data/store';
export default {
  name: 'SingleCardMovie',
  data(){
    return{
      store,
      moviesArray:[]
    }
  },
  created(){
    //FILM AXIOS
    axios.get(store.apiUrlMovie+store.apiKey)
      .then( (res) => {
        this.moviesArray = res.data.results
      } )
      .catch( (err) => {
        console.log(err);
      }
    );
  }
}

</script>

<template>
  <div class="single-card movie" v-for="movie in moviesArray"
    :key="movie.id">
    {{ movie.title }}
  </div>
</template>

<style lang="scss" scoped>
.single-card{
  height: 200px;
  width: calc(100% / 6 - 10px);
  background-color: blue;
  margin: 5px;
}
</style>