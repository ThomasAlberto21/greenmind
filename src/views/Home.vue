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

      <div class="text-center my-5">
        <h1 class="fw-bolder">Trending Now</h1>
        <p class="fst-italic">
          Find plants to decorate your favorite room in the house.
        </p>
      </div>

      <div class="row">
        <div
          class="col-lg-3 mb-5"
          v-for="trending_product in trending_products"
          :key="trending_product.id"
        >
          <TrendingProduct :trending_product="trending_product" />
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
import TrendingProduct from '@/components/TrendingProduct.vue';

export default {
  name: 'HomeView',
  components: {
    Hero,
    Navbar,
    BestProduct,
    TrendingProduct,
  },

  data() {
    return {
      best_products: [],
      trending_products: [],
    };
  },

  methods: {
    setBestProducts(data) {
      this.best_products = data;
    },
    setTrendingProducts(data) {
      this.trending_products = data;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/best_products')
      .then((response) => this.setBestProducts(response.data))
      .catch((error) => console.log(error));

    axios
      .get('http://localhost:3000/trending_products')
      .then((response) => this.setTrendingProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
