<template>
  <section class="success_order">
    <Navbar />

    <div class="container">
      <div class="row justify-content-center">
        <div class="col text-center">
          <img
            src="../assets/success_order.png"
            alt="success_order_img"
            class="img-fluid w-50 h-75 text-center"
          />
          <h1 class="fw-bold">Success Order</h1>
          <p>Your order will be delivered soon, please wait</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'SuccessOrderView',
  components: {
    Navbar,
  },
};
</script>
