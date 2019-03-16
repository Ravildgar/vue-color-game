<template>
  <div class="scene scene--card">
    <div class="card" @click.once="giveAnswer" :class="{flipped: isClicked}">
      <div class="card-face" :style="{ backgroundColor: backgroundColor }"></div>
      <div class="card-face card-face-back">
        <h1 v-if="isRightColor">{{$t("correctAnswer")}}</h1>
        <h1 v-else>{{$t("incorrectAnswer")}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isClicked: false
    };
  },
  props: {
    // принимает цвет
    backgroundColor: {
      type: String,
      required: true
    },
    сorrectСolor: {
      type: String,
      required: true
    }
  },
  computed: {
    isRightColor: function() {
      if (this.backgroundColor === this.сorrectСolor) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    giveAnswer: function() {
      this.isClicked = true;
      if (this.isRightColor) {
        console.log("угадал");
      } else {
        console.log("не угадал");
      }
    }
  }
};
</script>

<style scoped>
.scene {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin: 40px 0;
  perspective: 600px;
  display: inline-block;
  background: rgb(163, 151, 151);
}
.card {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;
}
.flipped {
  transform: translateX(-100%) rotateY(-180deg);
}
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  font-weight: bold;
  backface-visibility: hidden;
}

.card-face-back {
  background: blue;
  transform: rotateY(180deg);
}
h1 {
  margin-top: 45%;
  font-size: 20px;
}
</style>

<i18n>
{
  "en": {
    "correctAnswer": "That's right!",
    "incorrectAnswer": "Try again!"
  },
  "ru": {
    "correctAnswer": "Угадано!",
    "incorrectAnswer": "Попробуй еще!"
  }
}
</i18n>