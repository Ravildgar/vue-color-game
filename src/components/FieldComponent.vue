<template>
  <div>
    <SelectableColor
      v-for="(randomColor, index) in generateRandomColors"
      :key="indexF"
      :backgroundColor="randomColor"
      :сorrectСolor="pickColor"
    />
  </div>
</template>

<script>
import SelectableColor from "./SelectableColor.vue";

export default {
  components: {
    SelectableColor
  },
  computed: {
    numberOfCards: function() {
      return this.$store.state.numberOfCards;
    },
    generateRandomColors: function() {
      return this.$store.getters.generateRandomColors;
    },
    pickColor: function() {
      return this.$store.getters.pickColor;
    }
  },
  methods: {}
};
</script>
