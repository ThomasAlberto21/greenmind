<template>
  <section class="best_product mb-5">
    <div class="rounded-4" style="background-color: #c1dcdc">
      <div class="row">
        <div class="col-md-4">
          <img
            :src="best_product.image"
            alt="best_product_image"
            class="img-fluid rounded-4"
          />
        </div>
        <div class="col-md-8 py-5">
          <h3 class="fw-bolder">{{ best_product.title }}</h3>
          <p class="fw-normal pe-3">{{ best_product.description }}</p>
          <span class="fw-normal h4">$. {{ best_product.price }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BestProductComponent',
  props: ['best_product'],
};
</script>
