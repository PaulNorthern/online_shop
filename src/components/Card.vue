<template>
  <div>

    <router-link :to="{name: 'catalog'}">
      <div class="catalog__link_to_card">Back to catalog: {{ CART.length }}</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">There are no products in the cart...</p>
    <CardItem
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Card",
  components: {
    CardItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  },
  methods:{
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteFromCart(index){
      this.DELETE_FROM_CART(index)
    }
  }

}
</script>

<style scoped>

</style>