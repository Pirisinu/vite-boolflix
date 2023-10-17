<script>
import CardsComp from './CardsComp.vue';

export default {
  name: 'MainComp',
  components: {
    CardsComp,
  }
}
</script>

<template>
  <main>
    <CardsComp />
  </main>
</template>

<style>
main{
  background-color: #434343;
  height: calc(100vh - 80px);
  overflow-y: scroll;
  padding: 10px;
}
</style>