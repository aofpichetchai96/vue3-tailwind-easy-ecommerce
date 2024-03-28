<script setup>
import { ref , onMounted, reactive} from 'vue';
import { RouterLink, useRouter } from "vue-router";

import { useCartStore } from "@/stores/user/cart";

const router = useRouter();
const isLoggedIn = ref(false);
const searchText = ref('');
const cartStore = useCartStore();

const imageUrl = ref('https://raw.githubusercontent.com/aofpichetchai96/vue3-tailwind-easy-ecommerce/main/public/aofferman-icon.png');


onMounted(() => {
    if(localStorage.getItem('isLoggedIn')){
        isLoggedIn.value = true;        
    }
    if(localStorage.getItem('user-profile')){
      let imglocal = JSON.parse(localStorage.getItem('user-profile'))   
      imageUrl.value =  imglocal.imageUrl;
    }
});

const login = () => {
    isLoggedIn.value = true;
    localStorage.setItem('isLoggedIn',true);
    if(localStorage.getItem('user-profile')){
      let imglocal = JSON.parse(localStorage.getItem('user-profile'))   
      imageUrl.value =  imglocal.imageUrl;
    }
}
const logout = async () => {
    isLoggedIn.value = false;
    localStorage.clear();
    await router.push({name: 'home'})
    window.location.reload();
}

const handleSearch = (event) => {
  if(event.key === 'Enter'){   
    router.push({
      name: 'search',
      query: {
        q: searchText.value,     
      }
    });
  }
}
</script>

<template>
  <div class="container mx-auto">
    
    <!-- Header -->
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <RouterLink :to="{ name : 'home' }" class="btn btn-ghost text-xl">AofferMan Shop</RouterLink>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input v
            type="text"
            placeholder="Search"
            class="input input-bordered w-24 md:w-auto"
            v-model="searchText"
            @keyup="handleSearch"
          />
        </div>

        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">{{ cartStore.summartQuantity }}</span>
            </div>
          </div>
          <div
            tabindex="0"
            class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div class="card-body">
              <span class="font-bold text-lg">{{ cartStore.summartQuantity }}</span>
              <span class="text-info">Subtotal: {{ cartStore.summaryPrice }}</span>
              <div class="card-actions">
                <RouterLink :to="{name : 'cart'}" class="btn btn-primary btn-block">View cart</RouterLink :to="/cart">
              </div>
            </div>
          </div>
        </div>

        <button @click="login" v-if="!isLoggedIn" class="btn btn-ghost">
            LOGIN
        </button>  
        <div v-else class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                :src="imageUrl"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <RouterLink  :to="{ name:'profile'}" class="justify-between"> Profile </RouterLink>
            </li>
            <li><a @click="logout" >Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <slot> </slot>
    
    
    <!-- Footer  -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>
