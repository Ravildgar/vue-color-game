<template>
  <div>
    <h1>{{ numberOfCards }}</h1>
    <button>New Color!</button>
  </div>
</template>

<script>
export default {
  computed: {
    numberOfCards() {
      return this.$store.state.numberOfCards;
    }
  }
};
</script>

