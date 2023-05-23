<template>
  <section class="products">
    <Navbar />
    <div class="container">
      <h1>All Products</h1>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'ProductsView',
  components: {
    Navbar,
  },
};
</script>
