<script>
import { store } from '../../data/store';
export default {
  name: 'InputSearchText',
  data(){
    return{
      store
    }
  },
  mounted(){
    console.log(store.searchText);
  }
}
</script>

<template>
   <div class="input-container">
     
     <input 
     type="search" 
     name="" class="input-search"  
     v-model="store.searchText" 
     @keypress.enter="$emit('search')" 
     >

     <button  @click="$emit('search') ">Cerca</button>
    </div>

</template>

<style lang="scss">
button{
    background-color: crimson;
    margin: 0px 25px;
    color: wheat;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}
.input-container{
    margin: 0px 30px;
}
.input-search{
    padding: 5px;
    font-size: 15px;
}
</style>