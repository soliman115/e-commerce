<template>
    <div class="container tshirt">
      <h1 class="maintitle">T-Shirts</h1>
      <div class="row">
        <div v-for="mensTshirt in mensTshirts" :key="mensTshirt.id" class="col-12 col-sm -6 col-md-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
          <div class="card">
            <carousel :prePage="1">
                <slide v-for="(image, index) in mensTshirt.images" :key="index.id">
                  <img :src="image" alt="" class="mainimg" />
                </slide>
            </carousel>
  
  
             <!-- <img :src="mensTshirt.image" alt="" /> -->
          <div class="content">
            <h5>{{ mensTshirt.name }}</h5>
            <p>{{ mensTshirt.price }}</p>
            <button class="btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  <script>
  import mensTshirts from "../json/mensTshirts.json";
  //import  carousel from "vue-owl-carousel";
  export default {
    data() {
      return {
        mensTshirts: mensTshirts,
      };
    },
    name: "mensTshirts",
    components:{ mensTshirts,  }
  };
  </script>
  