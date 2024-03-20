<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/icons/Product.vue";

import { useProductStore } from "@/stores/user/product";

const route = useRouter();
const productStore = useProductStore();
const searchText = ref("");

watch(
  () => route.currentRoute.value.query.q,
  (newSearchText) => {
    searchText.value = newSearchText;
  },
  { immediate: true }
);

const filterProducts = computed(() => {
  return productStore.filterProducts(searchText.value);
});
</script>

<template>
  <UserLayout>
    <div class="text-3xl m-6">
      Search : <b>{{ searchText }} </b>
    </div>
    <Product :products="filterProducts"> </Product>
  </UserLayout>
</template>
