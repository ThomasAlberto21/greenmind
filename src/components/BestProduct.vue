<template>
  <section class="best_product mb-5">
    <div class="rounded-4" style="background-color: #c1dcdc">
      <div class="row">
        <div class="col-md-5">
          <img
            :src="best_product.image"
            alt="best_product_image"
            class="img-fluid rounded-4 h-100 w-100"
          />
        </div>
        <div class="col-md-7 py-5 px-lg-1 px-md-3 px-5">
          <h2 class="fw-bolder">{{ best_product.title }}</h2>
          <p class="fw-normal mt-4 pe-3">{{ best_product.description }}</p>
          <h5 class="fw-light">${{ best_product.price }}</h5>
          <router-link to="/cart" class="text-dark btn btn-light mt-3"
            >Buy Now <i class="bi bi-arrow-right"></i
          ></router-link>
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
