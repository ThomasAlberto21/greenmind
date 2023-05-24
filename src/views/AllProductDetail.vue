<template>
  <section class="product_detail">
    <Navbar />

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1>{{ all_products.title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'AllProductDetaiView',
  components: {
    Navbar,
  },

  data() {
    return {
      all_products: [],
    };
  },

  methods: {
    setAllProducts(data) {
      this.all_products = data;
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/all_products/' + this.$route.params.id)
      .then((response) => this.setAllProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
