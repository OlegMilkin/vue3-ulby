<template>
  <div>
    <strong>Cоздание поста</strong>
    <form class="form" @submit.prevent>
      <input 
        class="input" 
        type="text" 
        placeholder="Название"
        v-model="post.title"
      >
      <input 
        class="input" 
        type="text" 
        placeholder="Описание"
        v-model="post.body"
      >
      <button class="btn" @click="createPost">Создать</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style>
  .input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    cursor: pointer;
  }
</style>