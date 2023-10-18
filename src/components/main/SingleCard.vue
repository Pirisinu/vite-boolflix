<script>
import { store } from '../../data/store'
import StarsComp from './StarsComp.vue'
export default {
  name: 'SingleCard',
  props:['propriety','proprietyMovie'],
  data(){
    return{
      store,
      movieUrl:`'https://image.tmdb.org/t/p/w342' + proprietyMovie.poster_path`,
      tvUrl:'`https://image.tmdb.org/t/p/w342`+ propriety.poster_path',
      flags:['it','en']
    }
  },
  components:{
    StarsComp
  },
  methods:{
    getImage(img){
      return new URL(`../../assets/img/${img}.png`, import.meta.url).href
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
        <img :src="`https://image.tmdb.org/t/p/w342`+ propriety.poster_path" alt="IMG NOT FOUND">
        <div class="title-container">
          <h3 class="title">{{ propriety.name || propriety.title }}</h3>
        </div>
      </div>
      <div class="card-back">
        <div class="propriety-container">
          <h3>{{ propriety.name || propriety.title }}</h3>
          <h5 v-if="propriety.name !== propriety.original_name || propriety.title !== propriety.original_title " >Nome Originale: {{ propriety.original_name || propriety.original_title }}</h5>

          <div v-if="this.flags.includes(propriety.original_language)" class="language">
            <h5>Lingua:</h5>
            <img v-if="this.flags.includes(propriety.original_language)" :src="getImage(propriety.original_language)" alt="">
          </div>
          <h5 v-else >Lingua: {{ propriety.original_language }}</h5>
          <StarsComp :vote="propriety.vote_average"/>
          
          
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
        background: rgba(0, 0, 0, 0.1);
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

        .language{
          width: 60%;
          margin: 0 auto;

          img{
            width: 100%;
          }
        }
      }
    }
  }
  &:hover  .card-container {
  transform: rotateY(180deg);
  }
}
</style>