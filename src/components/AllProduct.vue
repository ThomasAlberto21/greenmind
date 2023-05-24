<template>
  <section class="all_product">
    <router-link :to="'/products/' + all_product.id" class="card border-0">
      <img
        :src="all_product.image"
        alt="trending_product_img"
        style="height: 25rem"
        class="img-fluid rounded-4"
      />
    </router-link>
    <div class="mt-3 text-dark">
      <h5 class="fw-bold">
        {{ all_product.title }}
      </h5>
      <p class="fw-normal">${{ all_product.price }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AllProductComponent',
  props: ['all_product'],
};
</script>
