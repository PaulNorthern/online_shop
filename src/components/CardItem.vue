<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="imgLink" alt="изображние товара">
    <!--    ТУТ ДОЛЖНА БЫТЬ КАРТИНКА    -->
<!--    <div style="margin: 10px; width: 200px; height: 200px; background-color: #2c3e50"></div>-->
    <div class="cart-item__info">
      <p>{{ cardItem.name }}</p>
      <p>{{ cardItem.price }}</p>
      <p>{{ cardItem.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty</p>
      {{ cardItem.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>

export default {
  name: "CardItem",
  data(){
    return {
      cardItem: {}
      }
  },
  props: {
    cart_item_data: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  // TODO: remove duplicate
  computed: {
    imgLink(){
      const fileName = this.cart_item_data.image;
      return require(`../assets/images/${fileName}`);
    }
  },
  methods:{
    deleteFromCart(){
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.cardItem = this.cart_item_data
    this.cardItem.quantity = 1
    console.log(this.cart_item_data, 'hui')
  }
}
</script>

<style lang="scss">
  .cart-item{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding * 2;
    margin-bottom: $margin * 2;
    &__image {
      max-width: 50px;
    }
  }
</style>