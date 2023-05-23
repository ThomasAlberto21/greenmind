<template>
  <section class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row">
        <div
          class="col-lg-6 col-12"
          v-for="best_product in best_products"
          :key="best_product.id"
        >
          <BestProduct :best_product="best_product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import BestProduct from '@/components/BestProduct.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Navbar,
    BestProduct,
  },

  data() {
    return {
      best_products: [],
    };
  },

  methods: {
    setBestProducts(data) {
      this.best_products = data;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/best_products')
      .then((response) => this.setBestProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
