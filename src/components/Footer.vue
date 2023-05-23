<template>
  <section class="footer mt-5" style="background-color: #c1dcdc">
    <footer class="text-center text-md-start">
      <div class="container p-4">
        <div class="row mt-4">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5
              class="text-uppercase text-dark"
              style="font-family: 'Quella', sans-serif"
            >
              Greenmind
            </h5>

            <p class="opacity-75 mt-4">
              We help you find <br />
              your dream plant
            </p>
            <div class="social-media mt-4">
              <div class="btn border border-1 border-dark rounded-circle">
                <i class="bi bi-facebook"></i>
              </div>
              <div class="btn border border-1 border-dark rounded-circle mx-3">
                <i class="bi bi-instagram"></i>
              </div>
              <div class="btn border border-1 border-dark rounded-circle">
                <i class="bi bi-twitter"></i>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-4 mb-4 mt-lg-0 mt-md-4">
            <h5 class="fw-semibold text-dark mb-3">Information</h5>

            <ul class="list-unstyled">
              <li>
                <a class="text-decoration-none opacity-75">About</a>
              </li>
              <li class="my-4">
                <a class="text-decoration-none opacity-75">Product</a>
              </li>
              <li>
                <a class="text-decoration-none opacity-75">Blog</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 mb-4 mt-lg-0 mt-md-4">
            <h5 class="fw-semibold text-dark mb-3">Company</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a class="text-decoration-none opacity-75">Community</a>
              </li>
              <li class="my-4">
                <a class="text-decoration-none opacity-75">Career</a>
              </li>
              <li>
                <a class="text-decoration-none opacity-75">Our story</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-4 mb-4 mt-lg-0 mt-md-4">
            <h5 class="fw-semibold text-dark mb-3">Contact</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a class="text-decoration-none opacity-75">Getting Started</a>
              </li>
              <li class="my-4">
                <a class="text-decoration-none opacity-75">Pricing</a>
              </li>
              <li>
                <a class="text-decoration-none opacity-75">Resources</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5">
          <p class="opacity-75">
            2023 all Right Reserved Term of use GREENMIND
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style>
p {
  color: #1e1e1e;
}

li a {
  color: #1e1e1e;
  cursor: pointer;
}
</style>
