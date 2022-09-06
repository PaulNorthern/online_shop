<template>
  <div>
    <CardItem
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";
import {mapActions} from "vuex";

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