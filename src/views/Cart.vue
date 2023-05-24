<template>
  <section class="cart">
    <Navbar />
    <div class="container my-5">
      <h1 class="fw-bold mb-5">Cart</h1>
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Image</th>
                <th scope="col">Name Plants</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id">
                <th>{{ index + 1 }}</th>
                <td class="w-25">
                  <img :src="cart.image" class="w-75" />
                </td>
                <td>
                  {{ cart.title }}
                </td>
                <td>{{ cart.quantity }}</td>
                <td>
                  {{ cart.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'CartView',
  components: {
    Navbar,
  },

  data() {
    return {
      carts: {},
    };
  },

  // mounted() {
  //   axios
  //     .get('http://localhost:3000/carts')
  //     .then((response) => this.setCarts(response.data))
  //     .catch((error) => console.log(error));
  //   this.fetchCartItems();
  // },
};
</script>
