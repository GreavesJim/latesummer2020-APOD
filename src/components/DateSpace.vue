<template>
  <div class="datespace">
    <div class="space">
      <h1>Space Pic of the Day</h1>
      <img class="img-fluid" :src="picture.url" alt />
      <h1>{{picture.title}}</h1>
      <p>{{picture.explanation}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "DateSpace",
  data() {
    return {};
  },
  methods: {},
  computed: {
    picture() {
      return this.$store.state.mySpace;
    },
  },
};
</script>
<style>
</style>