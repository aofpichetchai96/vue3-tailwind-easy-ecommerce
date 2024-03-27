<script setup>
  import { ref, onMounted } from "vue";

  import UserLayout from "@/layouts/UserLayout.vue";
  import { useCartStore } from "@/stores/user/cart";
  
  const cartStore = useCartStore();
  const orderData = ref({});

  onMounted(() => {
    cartStore.loadCheckout();    
    if(cartStore.checkouts.oderNumber){
      orderData.value = cartStore.checkouts;
    }
  })

</script>
<template>
  <UserLayout>
    <div class="max-w-2xl mx-auto boder border-base-200 shadow-xl p-8 my-4 bg-neutral-content drop-shadow-lg">
        <div>
          <div class="text-2xl font-bold">Your order SuccessFul !!</div>
          <div>Order : {{ orderData.name }}</div>
          <div>รอรับสินค้าได้เลยจร้า</div>
        </div>
        <div class="divider"></div>
        <div class="flex align-middle justify-between ">
          <div>
            <div class="font-bold">Oder Date</div>
            <div> {{ orderData.createdData }} </div>            
          </div>
          <div>
            <div  class="font-bold">Oder Number</div>
            <div> {{ orderData.oderNumber }} </div>            
          </div>
          <div>
            <div  class="font-bold">Payment Method</div>
            <div> {{ orderData.paymantMethod }} </div>            
          </div>
          <div>
            <div  class="font-bold">Address</div>
            <div> {{ orderData.address }} </div>            
          </div>
        </div>
        <div class="divider"></div>
        <div v-for="product in orderData.products" class="flex align-middle justify-between ">
          <div> 
            <img class="w-40 p-6 cursor-grabbing" :src="product.imageUrl" > 
          </div>
          <div class="pt-20 font-bold cursor-pointer"> 
             {{ product.name }} 
          </div>
          <div class="pt-20">
            จำนวน: {{ product.quantity }}
          </div>
          <div class="pt-20">
            ราคารวม: {{ product.price * product.quantity }} ฿
          </div>         
        </div>          
        <div class="divider"></div>
        <div class="flex-1">
          <div class="flex align-middle justify-between ">
            <div class="font-bold">ราคาสิ้นค้าทั้งหมด</div>
            <div>{{ orderData.totalPrice}}</div>
          </div>
          <div class="flex align-middle justify-between mb-2">
            <div class="font-bold">ค่าส่ง</div>
            <div>0</div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="flex align-middle justify-between mb-2">
            <div class="font-bold">ราคาทั้งสิ้น</div>
            <div>{{ orderData.totalPrice }} ฿</div>
          </div>
        <div class="divider"></div>
        <div class="font-bold">
          ขอบคุณที่มาอุดหนุนร้านของเรานะครับ
        </div>
    </div>

  </UserLayout>
</template>
