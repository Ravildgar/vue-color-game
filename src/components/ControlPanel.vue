<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">New Color!</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    }
  }
};
</script>

