<template>
  <div class="catalog-item">
    <img class="catalog-item__image" :src="imgLink" alt="изображние товара">
    <p class="catalog-item__name">{{ product_data.name }}</p>
    <p class="catalog-item__price">{{ product_data.price }} P.</p>
    <button @click="addToCart" class="catalog-item__add_to_cart_btn btn">Add to card</button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  emits: {
    addToCart: {}
  },
  computed: {
    imgLink(){
      const fileName = this.product_data.image;
      return require(`../assets/images/${fileName}`);
    }
  },
  methods: {
    addToCart(){
      this.$emit('addToCart', this.product_data)
    }
  },

}
</script>

<style lang="scss">
  .catalog-item {
    flex-basis: 25%; // 25% ширины в родителе
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding * 2;
    margin-bottom: $margin * 2;
    &__image {
      width: 100px;
    }
  }
</style>