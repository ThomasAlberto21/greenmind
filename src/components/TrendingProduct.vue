<template>
  <section class="trending_products">
    <router-link :to="'/products/' + trending_product.id" class="card border-0">
      <img
        :src="trending_product.image"
        alt="trending_product_img"
        style="height: 25rem"
        class="img-fluid rounded-4"
      />
    </router-link>
    <div class="mt-3 text-dark">
      <h5 class="fw-bold">
        {{ trending_product.title }}
      </h5>
      <p class="fw-normal">${{ trending_product.price }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrendingProductComponents',
  props: ['trending_product'],
};
</script>
