<template>
  <section class="contact">
    <Navbar />
    <div class="mb-4 container">
      <h2 class="h1-responsive fw-bold text-center my-4">Contact us</h2>

      <p class="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>
      <div class="row">
        <div class="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php">
            <div class="row">
              <div class="col-md-6">
                <label for="name" class="mb-2">Your name</label>
                <div class="md-form mb-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                    placeholder="Enter Your Name..."
                  />
                </div>
              </div>

              <div class="col-md-6">
                <label for="email" class="mb-2">Your email</label>
                <div class="md-form mb-3">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Your Email..."
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <label for="message" class="mb-2">Your message</label>
                <div class="md-form mb-3">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="10"
                    class="form-control md-textarea"
                    placeholder="Enter Your Message..."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div class="text-center text-md-left">
            <a
              class="btn w-100 py-2 fw-semibold"
              style="background-color: #c1dcdc"
              >Send Message</a
            >
          </div>
        </div>

        <div class="col-md-3 text-center">
          <ul class="list-unstyled mb-0">
            <li>
              <i class="bi bi-geo-alt-fill h1"></i>
              <p>San Francisco, CA 94126, USA</p>
            </li>

            <li>
              <i class="bi bi-telephone-fill h1"></i>
              <p>+ 01 234 567 89</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'ContactView',
  components: {
    Navbar,
  },
};
</script>
