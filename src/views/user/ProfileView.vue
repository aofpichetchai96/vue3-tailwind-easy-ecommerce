<script setup>
  import { ref ,reactive, onMounted } from "vue";
  import UserLayout from "@/layouts/UserLayout.vue";

  const userForm =[
    {name: 'Email', field: 'email'},
    {name: 'Name', field: 'name'}
  ];

  const userData = reactive({
    imageUrl: 'https://raw.githubusercontent.com/aofpichetchai96/vue3-tailwind-easy-ecommerce/main/public/aofferman-icon.png',
    email: '',
    name: ''
  });

  onMounted(() => {
    const savedUserProfile = localStorage.getItem('user-profile');
    if (savedUserProfile) {
      const userProfile = JSON.parse(savedUserProfile);
      userData.imageUrl = userProfile.imageUrl;
      userData.email = userProfile.email;
      userData.name = userProfile.name;
    }
  });
  
  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        userData.imageUrl = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const updateProfile = async () => {
    await localStorage.setItem('user-profile', JSON.stringify(userData)); 
    const checkUserProfile = await localStorage.getItem('user-profile');
    if(checkUserProfile){
      alert('Success Update Profile');
      window.location.reload();
    }
  }

</script>

<template>
  <UserLayout>
    <div class="max-w-2xl mx-auto boder border-base-200 shadow-xl p-8 my-4 drop-shadow-lg">
      <div class="font-bold text-2xl">Your Profile</div>

      <div class="flex flex-col items-center">

        <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img  :src="userData.imageUrl" />
            </div>
        </div>
        <label class="block">
          <input type="file"  @change="handleFileChange" class="cursor-pointer block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 mt-6
          "/>
      </label>
        <div v-for="item in userForm" class="form-control w-full">
          <label class="label">
            <span class="label">{{ item.name }}</span>
            <span class="label-text-alt"></span>
          </label>
          <input 
            type="text" 
            placeholder="Type here" 
            class="input input-bordered w-full"
            v-model="userData[item.field]">
          </input>
        </div>
        
        <button class="btn btn-primary w-full mt-4" @click="updateProfile">Update Profile</button>
      </div>
    </div>
    </UserLayout>
</template>
