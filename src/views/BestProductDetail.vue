<template>
  <section class="best_product_detail">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-4">
          <img
            :src="best_products.image"
            alt="best_products_image"
            class="rounded-4 img-fluid"
          />
        </div>

        <div class="col-lg-7">
          <h1 class="fw-bolder">{{ best_products.title }}</h1>
          <hr />
          <h1 class="fw-semibold mb-4">${{ best_products.price }}</h1>
          <p class="fw-normal">{{ best_products.description }}</p>

          <div class="mt-5">
            <p>Quantity</p>
          </div>
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
