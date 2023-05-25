<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container mt-3">
      <a
        class="navbar-brand me-5 mt-1 fw-normal"
        style="font-family: 'Quella', sans-serif"
        >GREENMIND</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav gap-lg-4">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/cart" type="button" class="position-relative">
              <i class="bi bi-cart text-black h5"></i>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark"
              >
                0
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  props: ['updateCarts'],
};
</script>

<style>
nav a.router-link-exact-active {
  color: black;
  font-weight: 600;
}
</style>
