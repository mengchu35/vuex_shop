<template>
  <div>
    <h2>Total Income</h2>
    <p>{{ $store.state.price }} x {{ $store.state.increment }} = {{ $store.getters.TotalIncome }}</p>
    <button v-on:click="$store.commit('reset')">Reset All</button>
  </div>
</template>

<script>
export default {
  name: 'TotalIncome',
}
</script>

<style scoped>

</style>
