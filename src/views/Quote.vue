<template>
  <div>
    <h1>Random Quotes</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Quotes',
  components: { HelloWorld }
}
</script>
<script>
import GoBackButton from '../components/GoBackButton.vue'

export default {
  components: { GoBackButton }
}
</script>