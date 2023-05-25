<template>
  <section class="cart">
    <Navbar :updateCarts="carts" />
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
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id">
                <th>{{ index + 1 }}</th>
                <td class="w-25">
                  <img :src="cart.products.image" class="w-75 rounded-4" />
                </td>
                <td>
                  {{ cart.products.title }}
                </td>
                <td>{{ cart.quantity }}</td>
                <td>${{ cart.products.price }}</td>
                <td>
                  <button
                    class="btn btn-danger text-white"
                    @click="deleteCart(cart.id)"
                  >
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td colspan="4" class="text-end">Total Price :</td>
                <td>
                  <strong>${{ totalPrice }}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <button
            type="button"
            class="btn btn-dark float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            Checkout <i class="bi bi-cart-check"></i>
          </button>
        </div>

        <!-- Modal -->
        <div
          class="modal"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1
                  class="modal-title fs-5 fw-bold text-dark"
                  id="exampleModalLabel"
                >
                  Checkout
                </h1>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-2">
                    <label for="name" class="col-form-label fw-bold"
                      >Name</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Your Name..."
                      v-model="orders.name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="address" class="col-form-label fw-bold"
                      >Address</label
                    >
                    <textarea
                      rows="5"
                      class="form-control"
                      placeholder="Enter Your Address..."
                      v-model="orders.address"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  class="btn btn-dark"
                  @click="checkoutOrders"
                >
                  Checkout <i class="bi bi-cart-check"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Navbar from '@/components/Navbar.vue';
import { deleteCart, successOrder, failedOrder } from '@/utils/toast';

export default {
  name: 'CartView',
  components: {
    Navbar,
  },

  data() {
    return {
      carts: [],
      orders: {},
    };
  },

  methods: {
    setCarts(data) {
      this.carts = data;
    },

    deleteCart(id) {
      axios
        .delete('http://localhost:3000/carts/' + id)
        .then(() => {
          deleteCart();
          axios
            .get('http://localhost:3000/carts')
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },

    checkoutOrders() {
      if (this.orders.name && this.orders.address) {
        this.orders.carts = this.carts;
        axios.post('http://localhost:3000/orders', this.orders).then(() => {
          this.carts.map(async (item) => {
            try {
              return await axios.delete(
                'http://localhost:3000/carts/' + item.id
              );
            } catch (error) {
              console.log(error);
            }
          });

          this.$router.push({ path: '/success_order' });
          successOrder();
        });
      } else {
        failedOrder();
      }
    },
  },

  mounted() {
    axios
      .get('http://localhost:3000/carts')
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },

  computed: {
    totalPrice() {
      return this.carts.reduce(function (item, data) {
        return item + data.products.price * data.quantity;
      }, 0);
    },
  },
};
</script>
