<template>
  <div>
    <h2>Total Income</h2>
    <p>{{ $store.state.mainFunc.price }} x {{ $store.state.mainFunc.increment }} = {{ $store.getters.TotalIncome }}</p>
    <button v-on:click="$store.dispatch('resetAsync')">Reset All</button>
  </div>
</template>

<script>
export default {
  name: 'TotalIncome',
}
</script>

<style scoped>

</style>
