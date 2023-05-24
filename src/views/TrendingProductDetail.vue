<template>
  <section class="trending_product_view">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-6">
          <img :src="trending_products.image" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'TrendingProductDetailView',
  components: {
    Navbar,
  },

  data() {
    return {
      trending_products: [],
    };
  },

  methods: {
    setTrendingProduct(data) {
      this.trending_products = data;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/trending_products/' + this.$route.params.id)
      .then((response) => this.setTrendingProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
