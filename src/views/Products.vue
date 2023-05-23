<template>
  <section class="products">
    <Navbar />
    <div class="container my-5">
      <h3 class="fw-normal mb-5">All <strong>Products</strong></h3>

      <div class="row mb-5">
        <div class="col">
          <div class="input-group">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Search Plants..."
              aria-label="Search Plants..."
              aria-describedby="basic-addon2"
              @keyup="searchPlants"
            />
            <div
              class="input-group-text text-white"
              id="search"
              style="background-color: #c1dcdc"
            >
              <i class="bi bi-search text-dark"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-lg-3 col-md-6 mb-5"
          v-for="all_product in all_products"
          :key="all_product.id"
        >
          <AllProduct :all_product="all_product" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import AllProduct from '@/components/AllProduct.vue';

export default {
  name: 'ProductsView',
  components: {
    Navbar,
    AllProduct,
  },

  data() {
    return {
      all_products: [],
      search: '',
    };
  },

  methods: {
    setAllProducts(data) {
      this.all_products = data;
    },

    searchPlants() {
      axios
        .get('http://localhost:3000/all_products?q=' + this.search)
        .then((response) => this.setAllProducts(response.data))
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/all_products')
      .then((response) => this.setAllProducts(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
