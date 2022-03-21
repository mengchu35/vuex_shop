<template>
  <div>
    <h2>Total Income</h2>
    <p>{{ price }} x {{ incrementTotal }} = {{ TotalIncome }}</p>
    <button v-on:click="reset">Reset All</button>
  </div>
</template>

<script>
export default {
  name: 'TotalIncome',
  data() {
    return {
      price: 100,
    }
  },
  props: {
    incrementTotal: Number
  },
  computed: {
    TotalIncome() {
      return this.price * this.incrementTotal;
    }
  },
  methods: {
    reset() {
      this.$emit('resetall');
    }
  }
}
</script>

<style scoped>

</style>
