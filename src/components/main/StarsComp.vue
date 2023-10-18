<script>
export default {
  name: 'StarsComp',
  props: {
    vote: Number
  },
  computed:{
    rating(){
      return this.vote * 10;
    }
  }
}
</script>

<template>
  <div class="stars-container">
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>
    <i class="far fa-star"></i>

    <div class="fill" :style="`width:${rating}%`">

      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.stars-container{
  position: relative;
  width: 90px;
  margin: 0 auto;
  
  .fill{
    position: absolute;
    display: flex;
    left: 0;
    top: 0;
    overflow: hidden;
  }
}
</style>