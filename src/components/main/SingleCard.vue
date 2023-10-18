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
    <div class="card-container">
      <div class="card-front">
        <img :src="`https://image.tmdb.org/t/p/w1280`+ propriety.backdrop_path" alt="">
        <div class="title-container">
          <h3 class="title">{{ propriety.name || propriety.title }}</h3>
        </div>
      </div>
      <div class="card-back">
        <div class="propriety-container">
          <h3>{{ propriety.name || propriety.title }}</h3>
          <h5>Nome Originale: {{ propriety.original_name || propriety.original_title }}</h5>
          <h5>Lingua: {{ propriety.original_language }}</h5>
          <h5>Voto: {{ propriety.vote_average }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-card{
  .card-container{
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease-in-out;
    transform-style: preserve-3d;

    .card-front, .card-back{
      position: absolute;
      width: 102%;
      height: 100%;
      backface-visibility: hidden;
    }
    .card-front{
      transform: rotateY(0deg);

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
      .title-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        background: rgba(0, 0, 0, 0.2);
        color: white;
        z-index: 1;
      }
      .title {
        font-size: 1.2rem;
        text-align: center;
      }
    }
    .card-back{
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      text-align: center;
      .propriety-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
      }
    }
  }
  &:hover  .card-container {
  transform: rotateY(180deg);
  }
}
</style>