<template>
  <div id="app">
    <HelloI18n/>
    <ControlPanel/>
    <PickColorBtn/>
    <SliderRanged @inputData="updateNumberOfColors"/>
    <FieldComponent :numberOfColors="childData"/>
  </div>
</template>

<script>
import HelloI18n from "./components/HelloI18n.vue";
import ControlPanel from "./components/ControlPanel.vue";
import PickColorBtn from "./components/PickColorBtn.vue";
import SliderRanged from "./components/SliderRanged.vue";
import FieldComponent from "./components/FieldComponent.vue";

export default {
  name: "app",
  components: {
    HelloI18n,
    ControlPanel,
    PickColorBtn,
    SliderRanged,
    FieldComponent
  },
  data: function() {
    return {
      childData: 12
    };
  },
  methods: {
    updateNumberOfColors(variable) {
      this.childData = Number(variable);
    }
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
