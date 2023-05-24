<template>
  <section class="best_product_detail">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-4 col-md-12 mx-auto">
          <img
            :src="best_products.image"
            alt="best_products_image"
            class="rounded-4 img-fluid"
          />
        </div>

        <div class="col-lg-8 col-md-12 position-relative">
          <h1 class="fw-bolder">{{ best_products.title }}</h1>
          <hr />
          <h1 class="fw-semibold mb-4">${{ best_products.price }}</h1>
          <p class="fw-normal">{{ best_products.description }}</p>

          <div class="mt-5">
            <div class="d-flex">
              <p class="me-3 my-auto">Quantity</p>
              <button class="btn btn-dark rounded-0">-</button>
              <input
                type="text"
                class="btn rounded-0 mx-2 px-0 text-center border border-dark"
                value="1"
              />
              <button class="btn btn-dark rounded-0">+</button>
            </div>

            <button class="btn btn-dark rounded-0 w-100 mt-4 py-3 fw-bold">
              Add To Cart
            </button>
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
