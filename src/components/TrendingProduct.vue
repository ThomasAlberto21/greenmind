<template>
  <section class="trending_products">
    <div class="">
      <img :src="trending_product.image" alt="trending_product.img" class="img-fluid w-100 h-100"/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TrendingProductComponents',
  props: ['trending_product'],
};
</script>
