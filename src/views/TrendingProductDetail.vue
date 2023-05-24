<template>
  <section class="trending_product_view">
    <Navbar />
    <div class="container my-5">
      <div class="row">
        <div class="col-lg-4 col-12 mx-auto">
          <img
            :src="trending_products.image"
            alt="best_products_image"
            class="rounded-4 img-fluid w-100 h-100"
          />
        </div>

        <div class="col-lg-8 col-md-12 mt-lg-0 mt-5">
          <h1 class="fw-bolder">{{ trending_products.title }}</h1>
          <hr />
          <h1 class="fw-semibold mb-4">${{ trending_products.price }}</h1>
          <p class="fw-normal">{{ trending_products.description }}</p>

          <div class="mt-5">
            <div class="d-flex">
              <p class="me-3 my-auto">Quantity</p>
              <button class="btn btn-dark rounded-0">-</button>
              <input
                type="text"
                class="rounded-0 mx-2 text-center border border-dark"
                value="1"
                style="width: 3rem"
              />
              <button class="btn btn-dark rounded-0">+</button>
            </div>

            <button class="btn btn-dark rounded-pill w-100 mt-4 py-3 fw-bold">
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

    fetchDataTrendingProducts() {
      axios
        .get('http://localhost:3000/trending_products/' + this.$route.params.id)
        .then((response) => this.setTrendingProduct(response.data))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.fetchDataTrendingProducts();
  },
};
</script>
