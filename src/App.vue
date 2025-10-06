<template>
  <div>
    <navbar></navbar>
    <RouterView />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    components: {
      Navbar
    }
  }
</script>

<style scoped>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 .app {
  padding: 20px;
 }

</style>