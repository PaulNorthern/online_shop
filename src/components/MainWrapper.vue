<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: "MainWrapper",

  props: {},
  data() {
    return {
      title: 'Main Wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
}
</script>

<style>
  .main-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }
</style>