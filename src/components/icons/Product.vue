<script setup>
import { defineProps } from "vue";

defineProps({
  products: Array,
  addToCart: Function,
});

</script>

<template>
  <!-- Product shelf -->
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6"
  >
    <div v-for="product in products" class="card w-full bg-base-100 shadow-xl">
      <figure>
        <img class="w-full" :src="product.imageUrl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary" @click="addToCart(product)">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
