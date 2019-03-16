<template>
  <div>
    <button @click="updateCards">New Color!</button>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfCards() {
      return this.$store.state.numberOfCards;
    }
  },
  methods: {
    updateCards: function() {
      this.$store.commit("setGameOn")
    }
  }
};
</script>

