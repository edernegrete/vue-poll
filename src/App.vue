<template>
  <div id="app">
    <header class="header">
      <button type="button" name="button" @click="handleEvent('/dashboard')">Go to dashboard</button>
      <button type="button" name="button" @click="handleEvent('/')">Go to poll</button>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm';

export default {
  name: 'app',
  components: {
    LoginForm,
  },
  methods: {
    handleEvent(path) {
      this.$router.push({ path });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
img {
  width: 100%;
}
.header {
  margin: 0;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
  padding: 1rem;
}
.logo {
    margin: 0 auto;
    width: 200px;
    height: 200px;
}

.login-modal {
  position: absolute;
  transition: 1s all ease;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
