<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";

import { useCartStore } from "@/stores/user/cart";

const checkoutForm = [
  {
    name: "Email Address",
    field: "email",
  },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Address",
    field: "address",
  },
  {
    name: "Note",
    field: "note",
  },
];
// const userCheckoutData = reactive({});
const cartStore = useCartStore();
const userFromData = reactive({
  email: "",
  name: "",
  address: "",
  note: "",
});

const payment = () => {
  console.log(userFromData);
};
</script>
<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-6">Checkout</h1>
    <div class="flex my-8">
      <section class="flex-auto w-64 p-8 bg-base-200">
        <div v-for="from in checkoutForm" class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ from.name }}</span>
          </label>
          <!-- 
          <textarea
            v-if="form.field === 'address'"
            class="textarea textarea-bordered h-24"
            placeholder="Address"
            v-model="userCheckoutData[form.field]"
          ></textarea> -->
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-sm w-full"
          />
        </div>
        <button @click="payment" class="btn btn-primary w-full mt-4">
          ชำระเงิน
        </button>
      </section>

      <section class="flex-auto w-32 p-4 bg-slate-200">
        <div v-for="item in cartStore.items" class="flex bg-white m-8 py-4">
          <div class="flex-1">
            <img class="w-40 p-6" :src="item.imageUrl" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div>
                  <b>{{ item.name }}</b>
                </div>
                <div>จำนวน: {{ item.quantity }}</div>
              </div>
              <RouterLink :to="{ name: 'cart' }"
                ><b><u>Edit</u></b></RouterLink
              >
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="p-6">
          <div>
            <b>Order Summary</b>
          </div>
          <div class="flex justify-between">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{ cartStore.summaryPrice }} ฿</div>
          </div>
          <div class="flex justify-between">
            <div>ค่าส่ง</div>
            <div>0 ฿</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex justify-between p-6">
          <div>ราคาทั้งหมด</div>
          <div>{{ cartStore.summaryPrice }} ฿</div>
        </div>
      </section>
    </div>
  </UserLayout>
</template>
