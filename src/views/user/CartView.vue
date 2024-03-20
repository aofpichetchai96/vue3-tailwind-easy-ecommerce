<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";
</script>
<template>
  <UserLayout>
    <h1 class="text-3xl font-bold m-6">Shopping Cart</h1>
    <div v-for="item in [1, 2, 3]" class="flex p-2">
      <div class="flex-auto w-64 bg-base-200 p-6">
        <div class="flex">
          <div class="flex-1">
            <img
              class="w-full p-10"
              src="https://fastly.picsum.photos/id/476/200/300.jpg?grayscale&hmac=rdN4pV7JFAtH4ZU68rquanFotYqni0n_KK5r1xHH_ZM"
            />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="grid grid-cols-2 relative">
                  <div>
                    <div><b>Test</b></div>
                    <div>Test detail</div>
                    <div>100 ฿</div>
                  </div>
                  <div>
                    <select class="select w-1/2 mx-6">
                      <option v-for="quanttity in [1, 2, 3, 4, 5]">
                        {{ quanttity }}
                      </option>
                    </select>
                  </div>
                  <div class="w-5 absolute top-0 right-0">
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
            <div>100</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ค่าส่ง</div>
            <div>0</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ราคารวททั้งหมด</div>
            <div>100</div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
