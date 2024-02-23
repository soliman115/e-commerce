<template>
  <div class="container tshirt mb-5">
      <h1 class="maintitle">T-Shirts</h1>
      <div class="row">
        <div v-for="tsh1 in tshirt1" :key="tsh1.id" class="col-12 col-md-6 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" v-for="(image, index) in tsh1.images" :key="index.id">
                <img :src="image" class="d-block w-100 mainimg" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        <div class="justify-content-center text-center mt-3">
          <h5>{{tsh1.name}}</h5>
          <p>{{tsh1.price}}</p>
          <button class="cart">Add To Cart</button>
        </div>
        </div>
     
 <!--***********************************************************-->
 <div v-for="tsh2 in tshirt2" :key="tsh2.id" class="col-12 col-md-6 col-xl-3  mt-3 justify-content-between p-2 align-items-lg-baseline">
  <div id="slidtshirt2" class="carousel slide" data-bs-ride="true">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#slidtshirt2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#slidtshirt2" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#slidtshirt2" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" v-for="(image, index) in tsh2.images" :key="index.id">
        <img :src="image" class="d-block w-100 mainimg" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#slidtshirt2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#slidtshirt2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div  class="justify-content-center text-center mt-3">
    <h5>{{tsh2.name}}</h5>
    <p>{{tsh2.price}}</p>
    <button class="cart">Add To Cart</button>
  </div>
</div>
     <!--*****************************************************-->

     <div v-for="tsh3 in tshirt3" :key="tsh3.id" class="col-12 col-md-6 col-xl-3  mt-3 justify-content-between p-2 align-items-lg-baseline">
      <div id="slidtshirt3" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#slidtshirt3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#slidtshirt3" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#slidtshirt3" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" v-for="(image, index) in tsh3.images" :key="index.id">
            <img :src="image" class="d-block w-100 mainimg" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#slidtshirt3" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#slidtshirt3" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div  class="justify-content-center text-center mt-3">
        <h5>{{tsh3.name}}</h5>
        <p>{{tsh3.price}}</p>
        <button class="cart">Add To Cart</button>
      </div>
  </div>
  <!--------------------------------------------------------------------------->

  <div v-for="tsh4 in tshirt4" :key="tsh4.id" class="col-12 col-md-6 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
    <div id="slidtshirt4" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#slidtshirt4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#slidtshirt4" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#slidtshirt4" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" v-for="(image, index) in tsh4.images" :key="index.id">
          <img :src="image" class="d-block w-100 mainimg" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#slidtshirt4" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#slidtshirt4" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="justify-content-center text-center mt-3">
      <h5>{{tsh4.name}}</h5> 
      <p>{{tsh4.price}}</p>
      <button class="cart">Add To Cart</button>
    </div>
</div>
      </div>
  </div>
</template>
<script>
  import tshirt1 from "../json/tshirt1.json";
  import tshirt2 from "../json/tshirt2.json";
  import tshirt3 from "../json/tshirt3.json";
  import tshirt4 from "../json/tshirt4.json";
  //import  carousel from "vue-owl-carousel";
  export default {
    data() {
      return {
        tshirt1: tshirt1,
        tshirt2: tshirt2,
        tshirt3: tshirt3,
        tshirt4: tshirt4,
      };
    },
    name: "tshirts",
    components:[ tshirt1 ,
                  tshirt2,
                   tshirt3,
                   tshirt4
              ]
  };
  </script>
  <style>
    .tshirt img{
      height: 370px;
      border-radius: 0px;
    }
    .tshirt p{
      font-size: 15px;
      margin-bottom: 8px;
      font-size: 14px;
       opacity: .7;
       font-weight: bold;
       text-align: center;
    }
    .tshirt h5{
      font-size: 23px;
      text-align: center;
    }
  </style>