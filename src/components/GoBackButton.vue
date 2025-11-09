<template>
  <button @click="goBack" class="go-back-btn">⬅ Go Back</button>
</template>

<script>
export default {
  name: 'GoBackButton',
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.go-back-btn {
  background-color: #6a5acd;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
}
.go-back-btn:hover {
  background-color: #836fff;
}
</style>
