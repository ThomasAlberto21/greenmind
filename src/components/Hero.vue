<template>
  <section class="hero my-4">
    <div class="rounded-4" style="background-color: #c1dcdc">
      <div class="row">
        <!-- Left -->
        <div class="col-lg-6 col-md-12 px-5 py-5">
          <h1 class="fw-bolder display-2 text-dark">
            Buy your <br />
            dream plants
          </h1>
          <div class="d-flex mt-5 gap-5">
            <p class="h4 fw-normal">
              50 + <br />
              Plants Species
            </p>
            <div class="border border-dark opacity-50"></div>
            <p class="h4 fw-normal">
              100 + <br />
              Customers
            </p>
          </div>

          <router-link
            to="/products"
            class="btn btn-dark rounded-pill px-4 py-3 mt-5 fw-bold"
          >
            See All Product <i class="bi bi-hand-index-thumb h5 ms-2"></i>
          </router-link>
        </div>

        <!-- Right -->
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
