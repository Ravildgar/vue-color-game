<template>
  <div>
    {{numberOfColors}}
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
    numberOfColors: {
      type: Number,
      default: 12
    },
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
