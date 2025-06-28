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
       <MyButton 
        class="create-btn" 
        @click="createPost"
      >
        Создать
       </MyButton>
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
  .create-btn {
    margin-top: 15px;
    align-self: flex-end;
  }

</style>