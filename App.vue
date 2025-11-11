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
  background: #f2f2f2;
}
router-link {
  margin: 0 10px;
  text-decoration: none;
}
</style>


