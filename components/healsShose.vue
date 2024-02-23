<template>
    <div class="container">
      <h1 class="maintitle">Healse</h1>
      <div class="row">
        <div  v-for="heal in heals" :key="heal.id" class="col-12 col-sm-6 col-md-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
          <div class="content justify-content-center text-center">
            <img :src="heal.image" class="mainimg"/>
          <h5 class="text-center mt-3">{{ heal.name }}</h5>
          <p>{{ heal.price }}</p>
          <button class="cart">Add To Cart</button>
        </div>
        </div>
      </div>
             
  </div>
  
      
  </template>
  <script>
      import heals from "../json/heals";
      export default {
        data() {
          return {
            heals: heals,
          };
        },
        name: "heals",
        components: heals,
        
      };
      </script>