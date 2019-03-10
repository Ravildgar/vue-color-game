<template>
  <div id="app">
    <SelectableColor
      backgroundColor="rgb(201, 76, 76)"
      сorrectСolor="rgb(201, 76, 76)"
      :key="'item.id'"
    />
    <SelectableColor
      backgroundColor="rgb(231, 06, 76)"
      сorrectСolor="rgb(201, 76, 76)"
      :key="'item.id231'"
    />
    <SelectableColor
      backgroundColor="rgb(1, 76, 76)"
      сorrectСolor="rgb(201, 76, 76)"
      :key="'item.i13d'"
    />
    <HelloI18n/>
  </div>
</template>

<script>
import HelloI18n from "./components/HelloI18n.vue";
import SelectableColor from "./components/SelectableColor.vue";

export default {
  name: "app",
  components: {
    HelloI18n,
    SelectableColor
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
