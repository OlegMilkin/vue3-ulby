<template>
  <div class="navbar">
    <my-button @click="$router.push('/')">Home</my-button>
    <my-button @click="$router.push('/posts')">Posts</my-button>
    <my-button @click="$router.push('/posts-composition')">Posts composition</my-button>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>

<style>
  .navbar {
    height: 50px;
    background: grey;
    display: flex;
  }
</style>