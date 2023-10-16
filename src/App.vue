<script>
import HeaderComp from './components/header/HeaderComp.vue';
import MainComp from './components/main/MainComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  }
}
</script>

<template>
  <div class="app">
    <HeaderComp />
    <MainComp />
  </div>
</template>

<style lang="scss" >
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
