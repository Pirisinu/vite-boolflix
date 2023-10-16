<script>
export default {
  name: 'SingleCard',
  props:['proprietyTv']
  
}

</script>

<template>
  <div class="single-card">
    <h1>{{ proprietyTv.title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.single-card{
  height: 500px;
  width: calc(100% / 6 - 10px);
  background-color: red;
  margin: 5px;
  color: white;
}
</style>