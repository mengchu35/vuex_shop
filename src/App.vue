<template>
  <div id="app">
    <BicycleRentalShop></BicycleRentalShop>
  </div>
</template>

<script>
import BicycleRentalShop from './components/BicycleRentalShop.vue'

export default {
  name: 'App',
  components: {
    BicycleRentalShop
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  cursor: default;
}

button {
  background-color: #C8D7DA;
  color: #FFFFFF;
  border: none;
  border-radius: 3px;
  line-height: 1.5;
  cursor: pointer;
  margin: 3px;
  box-shadow: 1px 2px 2px 1px #cccccc;
}

button.disabled, button:disabled {
  background-color: #D3D3D3;
}
</style>
