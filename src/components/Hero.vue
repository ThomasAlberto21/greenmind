<template>
  <section class="hero container mt-3 mb-5">
    <div class="w-100 h-100 rounded-4" style="background-color: #c1dcdc">
      <div class="row">
        <div class="col-lg-6 col-md-12 px-md-5 px-5 py-5 text-start">
          <h1 class="fw-bolder display-2 text-dark">
            Buy your <br />
            dream plants
          </h1>
          <div class="d-flex mt-5 gap-md-5 gap-4">
            <p class="h5 fw-normal">
              50 + <br />
              Plants Species
            </p>
            <div class="border border-dark opacity-50"></div>
            <p class="h5 fw-normal">
              100 + <br />
              Customers
            </p>
          </div>

          <router-link
            to="/products"
            class="btn btn-dark rounded-pill py-3 px-4 mt-5 fw-bold"
          >
            See All Product <i class="bi bi-hand-index-thumb ms-2 h5"></i>
          </router-link>
        </div>

        <div class="col-lg-6 col-md-12">
          <img
            src="../assets/hero.png"
            alt="hero_img"
            class="img-fluid w-100 h-100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroComponent',
};
</script>
