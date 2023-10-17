<script>
import { store } from '../../data/store'
export default {
  name: 'SingleCard',
  props:['propriety','proprietyMovie'],
  data(){
    return{
      store,
      movieUrl:`'https://image.tmdb.org/t/p/w1280' + proprietyMovie.backdrop_path`,
      tvUrl:'`https://image.tmdb.org/t/p/w1280`+ propriety.backdrop_path'
    }
  },
  mounted(){
    console.log(this.tvUrl);
  }
  
}

</script>

<template>
  <div class="single-card">
    <!-- <img :src="`https://image.tmdb.org/t/p/w1280`+ propriety.backdrop_path" alt=""> -->
    <div class="propriety-container">
      <h3>{{ propriety.name || propriety.title }}</h3>
      <h5>Nome Originale: {{ propriety.original_name || propriety.original_title }}</h5>
      <h5>Lingua: {{ propriety.original_language }}</h5>
      <h5>Voto: {{ propriety.vote_average }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.propriety-container{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
}
</style>