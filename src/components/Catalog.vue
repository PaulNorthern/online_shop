<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <CatalogItem
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @sendArticle="showChildArticle"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Catalog",
  components: {
    CatalogItem
  },
  props:{},
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  methods: {

    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),

    showChildArticle(data){
      console.log(data)
    }
  },
  mounted(){
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data){
          console.log('Data has been loaded')
        }
      })
  }
}
</script>

<style lang="scss">
  .catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>