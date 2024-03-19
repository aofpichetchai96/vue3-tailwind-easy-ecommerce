<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
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

    <!-- Product shelf -->
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6"
    >
      <div
        v-for="product in productStore.list"
        class="card w-full bg-base-100 shadow-xl"
      >
        <figure>
          <img class="w-full" :src="product.imageUrl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <p>{{ product.about }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  </UserLayout>
</template>
