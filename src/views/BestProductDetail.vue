<template>
  <section class="best_product_detail">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6">
          <img :src="best_products.image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'BestProductDetailView',
  components: {
    Navbar,
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
      .get('http://localhost:3000/best_products/' + this.$route.params.id)
      .then((response) => this.setBestProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
