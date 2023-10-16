<script>
import InputSearchText from './InputSearchText.vue';
import InputSelect from './InputSelect.vue';

export default {
  name: 'HeaderComp',
  components: {
    InputSearchText,
    InputSelect
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
      <InputSelect />
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
    height: 50%;
    width: 150px;
    
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