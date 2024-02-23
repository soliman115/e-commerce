<template>
    <div class="container">
      <h1 class="maintitle">Mens Shose</h1>
      <div class="row">
        <div  v-for="menshose in mensshose" :key="menshose.id" class="col-12 col-sm-6 col-md-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
          <div class="content justify-content-center text-center">
            <img :src="menshose.image" class="mainimg"/>
          <h5 class="text-center mt-3">{{ menshose.name }}</h5>
          <p>{{ menshose.price }}</p>
          <button class="cart">Add To Cart</button>
        </div>
        </div>
      </div>
             
  </div>
  
      
  </template>
  <script>
      import mensshose from "../json/mensshose";
      export default {
        data() {
          return {
            mensshose: mensshose,
          };
        },
        name: "mensshose",
        components: mensshose,
        
      };
      </script>