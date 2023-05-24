<template>
  <section class="best_product mb-5">
    <div class="rounded-4" style="background-color: #c1dcdc">
      <div class="row justify-content-center align-items-center">
        <!-- Left -->
        <div class="col-md-5">
          <img
            :src="best_product.image"
            alt="best_product_image"
            class="img-fluid rounded-4 w-100 h-100"
          />
        </div>

        <!-- Right -->
        <div class="col-md-7 py-lg-0 py-md-0 py-5 px-lg-3 px-md-3 px-5">
          <h2 class="fw-bolder">{{ best_product.title }}</h2>
          <p class="fw-normal mt-4">
            {{ best_product.description }}
          </p>
          <h5 class="fw-semibold mb-4">${{ best_product.price }}</h5>
          <router-link
            :to="'/best_products_detail/' + best_product.id"
            class="btn btn-dark text-light px-5 py-2 rounded-pill fw-bold"
            >View Plant <i class="bi bi-arrow-right ms-1 h5"></i
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
