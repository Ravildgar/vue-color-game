<template>
  <div>
    <div class="slidecontainer">
      <input v-model="value" type="range" min="2" max="22" value="10" class="slider">
      <p>Value: {{value}}</p>
    </div>

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
  </div>
</template>

<script>
import SelectableColor from "./SelectableColor.vue";

export default {
  components: {
    SelectableColor
  },
  props: {
    сorrectСolor: {
      type: String,
      default: "rgb(201, 76, 76)"
    }
  },
  data: function() {
    return {
      value: 12
    };
  }
};
</script>

<style scoped>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4caf50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4caf50;
  cursor: pointer;
}
</style>
