<template>
  <div class="slidecontainer">
    <input v-model="value" type="range" min="2" max="22" value="10" class="slider">
    <p v-if="value < 7">{{ $t('value') }} {{value}}. {{ $t('easy') }}</p>
    <p v-else-if="value < 15">{{ $t('value') }} {{value}}. {{ $t('middle') }}</p>
    <p v-else>{{ $t('value') }} {{value}}. {{ $t('hard') }}</p>
  </div>
</template>

<script>
export default {
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

<i18n>
{
  "en": {
    "value": "Number of guessed colors:",
    "easy" : "Light.",
    "middle": "Medium.",
    "hard": "Heavy."
  },
  "ru": {
    "value": "Количество угадываемых цветов:",
    "easy" : "Уровень - легкий.",
    "middle": "Уровень - средний.",
    "hard": "Уровень - тяжелый."
  }
}
</i18n>