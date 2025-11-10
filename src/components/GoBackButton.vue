<template>
  <button @click="$router.go(-1)">Go Back</button>
</template>

<style scoped>
button {
  background-color: #4caf50;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
