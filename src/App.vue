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
  <h1>ciao da app</h1>
  <HeaderComp />
  <MainComp />
</template>

<style lang="scss">

</style>
