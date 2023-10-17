<script>
import { store } from '../../data/store'
export default {
  name: 'SingleCard',
  props:['proprietyTv','proprietyMovie'],
  data(){
    return{
      store,
      movieUrl:'https://image.tmdb.org/t/p/w1280`+ proprietyTv.backdrop_path',
      tvUrlImg:'https://image.tmdb.org/t/p/w1280`+ proprietyMovie.backdrop_path'
    }
  },
  mounted(){
    console.log('props' + proprietyTv);
  }
  
}

</script>

<template>
  <div class="single-card">
    <img :src="this.tvUrlImg" alt="">
    <h3>{{ proprietyTv.name }}</h3>
    <h4>{{  }}</h4>
  </div>
</template>

<style lang="scss" scoped>
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>