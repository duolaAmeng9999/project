<template>
  <div id="app">
    <div class="container">
      <v-header></v-header>
      <v-list></v-list>
    </div>
  </div>
</template>

<script>
  //https://api.github.com/search/users?q=damu
  import header from "./components/header"
  import list from "./components/list"
  export default {
    name: 'App',
    components:{
      "v-header":header,
      "v-list":list
    }
  };
</script>

<style scoped></style>
