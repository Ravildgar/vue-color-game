<template>
  <div id="app">
    <HelloI18n/>
    <FieldComponent/>
  </div>
</template>

<script>
import HelloI18n from "./components/HelloI18n.vue";
import FieldComponent from "./components/FieldComponent.vue";

export default {
  name: "app",
  components: {
    HelloI18n,
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
