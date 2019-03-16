<template>
  <div id="app">
    <ControlPanel/>
    <SliderRanged/>
    <FieldComponent/>
  </div>
</template>

<script>
import ControlPanel from "./components/ControlPanel.vue";
import SliderRanged from "./components/SliderRanged.vue";
import FieldComponent from "./components/FieldComponent.vue";

export default {
  name: "app",
  components: {
    ControlPanel,
    SliderRanged,
    FieldComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
