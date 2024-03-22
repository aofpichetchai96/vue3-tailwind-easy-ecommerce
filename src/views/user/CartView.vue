<script setup>
import { RouterLink } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";

import { useCartStore } from "@/stores/user/cart";

const cartStore = useCartStore();

const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value);
  cartStore.updateQuantity(index, newQuantity);
};
</script>
<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-6">Shopping Cart</h1>
    <div v-if="cartStore.items.length === 0" class="text-2xl font-bold p-2">
      Cart is empty.
    </div>
    <div v-else v-for="(item, index) in cartStore.items" class="flex p-2">
      <div class="flex-auto w-64 bg-base-200 p-6">
        <div class="flex">
          <div class="flex-1">
            <img class="w-full p-10" :src="item.imageUrl" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="grid grid-cols-2 relative">
                  <div>
                    <div>
                      <b>{{ item.name }}</b>
                    </div>
                    <div>{{ item.about }}</div>
                    <div>{{ item.price }} ฿</div>
                  </div>
                  <div>
                    <select
                      v-model="item.quantity"
                      class="select w-1/2 mx-6"
                      @change="changeQuantity($event, index)"
                    >
                      <option v-for="quanttity in [1, 2, 3, 4, 5]">
                        {{ quanttity }}
                      </option>
                    </select>
                  </div>
                  <div
                    @click="cartStore.removeItemInCart(index)"
                    class="w-5 absolute top-0 right-0"
                  >
                    <Close></Close>
                  </div>
                </div>
              </div>
              <div><b>Stock</b></div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-auto w-32 bg-slate-200 p-6">
        <div class="text-xl font-bold">Order Summary</div>
        <div class="my-4 divide-y divide-black">
          <div class="flex justify-between py-2">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ค่าส่ง</div>
            <div>0</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ราคารวททั้งหมด</div>
            <div>{{ cartStore.summaryPrice }}</div>
          </div>
          <RouterLink
            :to="{ name: 'checkout' }"
            class="btn btn-neutral w-full mt-4"
            >ชำระเงิน</RouterLink
          >
        </div>
      </div>
    </div>
  </UserLayout>
</template>
