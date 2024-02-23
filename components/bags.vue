<template>
    <div class="container">
      <h1 class="maintitle">Bags</h1>
      <div class="row">
        <div  v-for="bag in bags" :key="bag.id" class="col-12 col-sm-6 col-md-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
          <div class="content justify-content-center text-center">
            <img :src="bag.image" class="mainimg"/>
          <h5 class="text-center mt-3">{{ bag.name }}</h5>
          <p>{{ bag.price }}</p>
          <button class="cart">Add To Cart</button>
        </div>
        </div>
      </div> 
             
  </div>
    
  </template>
  <script>
      import bags from "../json/bags";
      export default {
        data() {
          return {
            bags: bags,
          };
        },
        name: "bags",
        components: bags, 
        
      };
      </script>