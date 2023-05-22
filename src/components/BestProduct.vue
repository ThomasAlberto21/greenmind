<template>
  <section class="best_product container">
    <div class="r">
      <h1 class="text-dark">{{ best_product.title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BestProductComponent',
  props: ['best_product'],
};
</script>
