<template>
  <div class="space">
    <h1>Space Pic of the Day</h1>
    <img class="img-fluid" :src="picture.url" alt />
    <h1>{{picture.title}}</h1>
    <p>{{picture.explanation}}</p>
  </div>
</template>
<script>
export default {
  name: "Space",
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("getSpacePic");
  },
  computed: {
    picture() {
      return this.$store.state.space;
    },
  },
};
</script>
<style>
</style>