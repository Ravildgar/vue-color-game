<template>
  <div>
    <SelectableColor
      v-for="(randomColor, index) in generateRandomColors"
      :key="index"
      :backgroundColor="randomColor"
      :сorrectСolor="pickColor"
    />
  </div>
</template>

<script>
import SelectableColor from "./SelectableColor.vue";

export default {
  // watch: {
  //   numberOfColors: function() {
  //     // watch it
  //     this.generateRandomColors(this.numberOfColors);
  //     this.pickColor(this.numberOfColors);
  //   }
  // },
  components: {
    SelectableColor
  },
  props: {
    numberOfColors: {
      type: Number,
      default: 12
    }
  },
  data: function() {
    return {
      value: 12
    };
  },
  methods: {
    // генерируем случайный цвет
    randomColors: function() {
      // выбор красного оттенка от 0 до 255
      const r = Math.floor(Math.random() * 256);
      // выбор зелего оттенка от 0 до 255
      const g = Math.floor(Math.random() * 256);
      // выбор синего оттенка от 0 до 255
      const b = Math.floor(Math.random() * 256);

      const rgb = "rgb(" + r + ", " + g + ", " + b + ")";
      return rgb;
    }
  },
  computed: {
    generateRandomColors: function() {
      //создаем array
      let arr = [];
      // добавляем num случайных цветов в array;
      for (let i = 0; i < this.numberOfColors; i++) {
        arr.push(this.randomColors());
      }
      //возвращаем array
      return arr;
    },
    //генерируем array с num случайных цветов
    pickColor: function() {
      const random = Math.floor(Math.random() * this.numberOfColors);
      return this.generateRandomColors[random];
    }
  }
};
</script>
