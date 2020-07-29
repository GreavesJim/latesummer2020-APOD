<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <Space />
        </div>
        <div class="col-3">
          <div>
            <date-pick v-model="date"></date-pick>
            <button class="btn btn-info" @click.prevent="getDate()">Get</button>
          </div>
        </div>
        <div class="col-6">
          <DateSpace />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Space from "./components/Space";
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
import DateSpace from "./components/DateSpace";

export default {
  name: "App",
  data() {
    return {
      date: "2019-01-01",
    };
  },
  methods: {
    getDate() {
      console.log(this.date);
      this.$store.dispatch("getMySpacePic", this.date);
    },
  },
  components: {
    Space,
    DatePick,
    DateSpace,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
