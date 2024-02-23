<template>
  <div class="container sowara">
    <h1 class="maintitle">Sowara Dreses</h1>
    <div class="row">
      <div  v-for="sowaradresse in sowaradresses" :key="sowaradresse.id" class="col-12 col-sm-6 col-md-4 mt-3 justify-content-between p-2 align-items-lg-baseline">
        <div class="content">
          <img :src="sowaradresse.image" class="mainimg"/>
        <h5 class="text-center mt-3">{{ sowaradresse.name }}</h5>
        <p>{{ sowaradresse.price }}</p>
        <button class="cart">Add To Cart</button>
      </div>
      </div>
    </div>
           
</div>

    
</template>
<script>
    import sowaradresses from "../json/sowaradresses";
    export default {
      data() {
        return {
            sowaradresses: sowaradresses,
        };
      },
      name: "sowaradresses",
      components: sowaradresses,
      
    };
    </script>
    <style>
      .sowara p{
        font-size: 15px;
        margin-bottom: 8px;
        font-size: 14px;
         opacity: .7;
         font-weight: bold;
         text-align: center;
      }
      .sowara h5{
        font-size: 20px;
      }
      .sowara .content:hover{
        transform: scale(1);
           box-shadow: 5px 5px 30px gray;
      }
    </style>