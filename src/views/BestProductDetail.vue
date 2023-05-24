<template>
  <section class="best_product_detail">
    <Navbar />
    <div class="container my-5">
      <router-link to="/" class="btn btn-dark mb-5 fw-bold"
        ><i class="bi bi-arrow-left"></i> Back</router-link
      >
      <div class="row">
        <div class="col-lg-4 col-12 mx-auto">
          <img
            :src="best_products.image"
            alt="best_products_image"
            class="rounded-4 img-fluid w-100"
          />
        </div>

        <div class="col-lg-8 col-md-12 mt-lg-0 mt-5">
          <h1 class="fw-bolder">{{ best_products.title }}</h1>
          <hr />
          <h1 class="fw-semibold mb-4">${{ best_products.price }}</h1>
          <p class="fw-normal">{{ best_products.description }}</p>

          <form class="mt-5" v-on:submit.prevent>
            <div class="d-flex">
              <p class="me-3 my-auto">Quantity</p>
              <button class="btn btn-dark rounded-0" @click="decrement">
                -
              </button>
              <input
                type="text"
                class="rounded-0 mx-2 text-center border border-dark"
                v-model="value"
                style="width: 3rem"
              />
              <button class="btn btn-dark rounded-0" @click="increment">
                +
              </button>
            </div>

            <button
              class="btn btn-dark rounded-pill w-100 mt-4 py-3 fw-bold"
              @click="submitOrder"
            >
              Add To Cart
            </button>
          </form>
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
      value: 0,
      best_products: [],
      carts: {},
    };
  },

  methods: {
    setBestProducts(data) {
      this.best_products = data;
    },

    increment() {
      this.value++;
    },

    decrement() {
      if (this.value > 0) {
        this.value--;
      }
    },

    submitOrder() {
      this.carts.best_products = this.best_products;
      axios
        .post('http://localhost:3000/carts', this.carts)
        .then(() => {
          this.$router.push({ path: '/cart' });
        })
        .catch((error) => {
          console.log(console.log(error));
        });
    },

    fetchDataBestProducts() {
      axios
        .get('http://localhost:3000/best_products/' + this.$route.params.id)
        .then((response) => this.setBestProducts(response.data))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.fetchDataBestProducts();
  },
};
</script>
