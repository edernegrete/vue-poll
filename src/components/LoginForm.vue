<template>
  <div class="form">
    <input class="input" type="text" placeholder="username" v-model="username"/>
    <input class="input" type="password" placeholder="password" v-model="password"/>
    <button class="button" :disabled="!password || !username"@click="handleEvent(password, username)">login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      password: '',
      username: '',
    };
  },
  methods: {
    handleEvent(password, username) {
      this.$emit('loginEvent', { password, username });
    },
  },
};
</script>

<style scoped>
  .form {
    background: #FFFFFF;
    max-width: 360px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }
  .input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .button {
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .button[disabled] {
    background: gray;
  }
  .button[disabled]:hover {
    background: gray;
  }
  .button:hover,.button:active {
    background: #43A047;
  }

</style>
