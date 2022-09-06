<template>
  <div class="main-wrapper">
    <p>{{ title }}</p>
    <Catalog />
    <Card
        v-if="CART.length"
        :cart_data="CART"
    />
  </div>
</template>

<script>

import Catalog from "@/components/Catalog";
import Card from "@/components/Card";
import {mapGetters} from "vuex";

export default {
  name: "MainWrapper",
  components: {
    Catalog,
    Card
  },
  props: {},
  data() {
    return {
      title: 'Main Wrapper'
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods: {},
  watch: {},
  mounted() {
    // когда компонент полностью загрузиться
  }
}
</script>

<style>
  .main-wrapper {
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    max-width: 900px;
    margin: 0 auto;
  }
</style>