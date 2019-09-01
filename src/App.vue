<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/layout/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>

</style>
<style src='./assets/css/main.css'></style>
