<template lang="html">
  <div class="vueAlert">
    <div class="card-panel teal red">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'vueAlert',
  props: ['message']
}
</script>

<style lang="css">
</style>
