<template>
  <section class="product_detail">
    <Navbar />

    <div class="container">
      <h1>Product Detail {{ $route.params.id }}</h1>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'ProductDetaiView',
  components: {
    Navbar,
  },
};
</script>
