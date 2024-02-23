<template>
    <div class="container">
      <h1 class="maintitle">Womens Shose</h1>
      <div class="row">
        <div  v-for="shosesWomen in shosesWomens" :key="shosesWomen.id" class="col-12 col-sm-6 col-md-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
          <div class="content justify-content-center text-center">
            <img :src="shosesWomen.image" class="mainimg"/>
          <h5 class="text-center mt-3">{{ shosesWomen.name }}</h5>
          <p>{{ shosesWomen.price }}</p>
          <button class="cart">Add To Cart</button>
        </div>
        </div>
      </div>
             
  </div>
  
      
  </template>
  <script>
      import shosesWomens from "../json/shosesWomens";
      export default {
        data() {
          return {
            shosesWomens: shosesWomens,
          };
        },
        name: "shosesWomens",
        components: shosesWomens,
        
      };
      </script>