<template>
  <div>
    <h1>Contact Page</h1>
    <p>Name: Tracey Sanders</p>
    <p>Email: tssanders@my.waketech.edu</p>

    <!-- Add Go Back button -->
    <GoBackButton />
  </div>
</template>

<script>
import GoBackButton from "../components/GoBackButton.vue";

export default {
  name: "ContactPage",
  components: { GoBackButton },
};
</script>

<style scoped>
h1 {
  color: #4b0082;
}
</style>
