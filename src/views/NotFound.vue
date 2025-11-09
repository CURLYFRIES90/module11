<template>
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for doesn’t exist.</p>
    <GoBackButton />
  </div>
</template>

<script>
import GoBackButton from '../components/GoBackButton.vue'

export default {
  name: 'NotFound',
  components: { GoBackButton }
}
</script>
