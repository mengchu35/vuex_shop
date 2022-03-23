<template>
  <div>
    <h1>Bicycle Rental Shop</h1>
    <img src=../image/bike.gif width="200">
    <p>Number of bicycles: {{ $store.state.mainFunc.count }}</p>
    <button v-on:click="$store.commit('plus')" v-bind:disabled="$store.getters.btnPlus">+1</button>
    <button v-on:click="$store.commit('minus')" v-bind:disabled="$store.getters.btnMinus">-1</button>
    <p v-if="$store.state.mainFunc.count == 0" v-bind:style="{ color: textdanger }">No bike is available</p>
    <p v-else v-bind:style="{ color: textsuccess }">Bikes are available</p>
    <hr>
    <h2>Rules</h2>
    <ol>
      <li v-for="(rule, index) in $store.state.mainFunc.rules" v-bind:key="index">{{ rule }}</li>
    </ol>
    <hr>
    <TotalIncome></TotalIncome>
    <p>Current Time: {{ $store.state.timeStamp.timestamp }}</p>
  </div>
</template>

<script>
import TotalIncome from './TotalIncome.vue'
import { mapActions } from 'vuex'

export default {
  name: 'BicycleRentalShop',
  components: {
    TotalIncome
  },
  data() {
    return {
      textdanger: '#C21414',
      textsuccess: '#B5B35D',
    }
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    ...mapActions({
      getNow: 'getNow',
    }),
  }
}
</script>

<style scoped>
div {
  width: 500px;
  margin: 0 auto;
}

h1 {
  text-shadow: 2px 2px 1px #cccccc;
}

ol {
  width: 250px;
  text-align: left;
  margin: 16px auto;
}
</style>
