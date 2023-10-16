<script>
export default {
  name: 'SingleCard',
  props:['proprietyTv']
  
}

</script>

<template>
  <div class="single-card">
    <h1>{{ proprietyTv.name }}</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>