<script setup>
import UserLayout from "@/layouts/UserLayout.vue";

import Product from "@/components/icons/Product.vue";

import { useProductStore } from "@/stores/user/product";

const productStore = useProductStore();
</script>

<template>
  <UserLayout>
    <div class="hero h-72 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">My Shop</h1>
          <p class="py-6">
            Welcome to AofferMan shop , This is our product list.
          </p>
        </div>
      </div>
    </div>

    <Product :products="productStore.list"> </Product>
  </UserLayout>
</template>
