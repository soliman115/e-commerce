<template>
  <div class="container mt-5 mixed">
      <h1 class="maintitle">Mixed Closes For Womens</h1>
      <div class="row">
        <div v-for="mixedWomen in mixedWomens" :key="mixedWomen.id" class="col-12 col-md-6 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline justify-content-center text-center">
          <div class="changeimg">
              <img :src="mixedWomen.image[0]" class="mainimg" id="firstimg"/>
              <img :src="mixedWomen.image[1]" class="mainimg" id="imgchanged"/>
          </div>
              <h5 class="text-center mt-3">{{mixedWomen.name}}</h5>
              <p class="text-center">{{mixedWomen.price}}</p>
              <button class="cart">Add To Cart</button>
          </div>  <!-- end of product1-buttom -->
  
        </div>
      </div>
</template>
<script>
  import mixedWomens from "../json/mixedWomens";
  export default {
    data() {
      return {
          mixedWomens: mixedWomens,
      };
    },
    name: "mixedWomens",
    components: mixedWomens,
  };
  </script>
  <style>
    .mixed p{
      font-size: 15px;
      margin-bottom: 8px;
      font-size: 14px;
       opacity: .7;
       font-weight: bold;
       text-align: center;
    }
    .mixed h5{
      font-size: 20px;
      text-align: center;
    }
    .mixed .mainimg{
      width: 220px;
      height: 280px;
    }
    .changeimg img{
      border-radius: 12px;
      
    }
      .changeimg{
          position: relative;
          transition: all 2s;
      }
      #imgchanged{
        position: absolute;
        top: 0%;
        left: 15%;
          visibility: hidden;
      }
      .changeimg:hover #imgchanged{
          visibility: visible;
      }
      .changeimg:hover #firstimg{
          visibility: hidden;
      }
      @media(max-width: 1400px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 5%;
              }
          }
      @media(max-width: 1300px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 6%;
              }
          }
      @media(max-width: 1200px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 27%;
              }
          }
      @media(max-width: 1100px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 26%;
              }
          }
      @media(max-width: 1050px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 25%;
              }
          }
      @media(max-width: 1000px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 25%;
              }
          }
      @media(max-width: 992px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 18%;
              }
          }
          @media(max-width: 768px){
            #imgchanged{
                position: absolute;
                top: 0%;
                left: 30%;
                  }
                  }
     @media(max-width: 580px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 29%;
              }
           }   
      @media(max-width: 550px){
        #imgchanged{
            position: absolute;
            top: 0%;
            left: 23%;
              }
                 }                     

  </style>