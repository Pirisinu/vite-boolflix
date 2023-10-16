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
  <span>Ciao da header</span>
  <InputSearchText />
  <InputSelect />
</template>

<style>

</style>