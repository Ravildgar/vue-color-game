<template>
  <div id="app">
    <HelloI18n/>
    <SliderRanged/>
    <FieldComponent/>
  </div>
</template>

<script>
import HelloI18n from "./components/HelloI18n.vue";
import SliderRanged from "./components/SliderRanged.vue";
import FieldComponent from "./components/FieldComponent.vue";

export default {
  name: "app",
  components: {
    HelloI18n,
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
