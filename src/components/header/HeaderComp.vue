<script>
import InputSearchText from './InputSearchText.vue';

export default {
  name: 'HeaderComp',
  components: {
    InputSearchText
  }
}
</script>

<template>
  <div class="headBox">
    <div class="logo">
      <img src="/public/logo-boolflix.png" alt="BOOLFIX">
    </div>
    <div class="input-box">
      <InputSearchText />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.headBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: black;
  .logo{
    height: 60%;
    width: 190px;
    margin-left: 15px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .input-box{
    display: flex;
    align-items: center;
  }
}
</style>