<template>
  <div id="app">
    <nav>
      <router-link to="/">About</router-link> |
      <router-link to="/quotes">Random Quotes</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #eee;
}
nav a {
  margin: 0 10px;
}
</style>
