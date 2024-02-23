<template>
  <div class="container mt-5 tea">
    <h1 class="maintitle">Tea Lenght Dresses</h1>
    <div class="row">
      <div v-for="dressTea in dressesTea" :key="dressTea.id" class="col-12 col-sm-6 col-md-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline ">
        <div class="lay">
            <img :src="dressTea.image" class="mainimg"/>
            <!-- <button type="button" title="Quick View" class="btn" @click="fullscreen()">
               <i class="fa-solid fa-eye"></i>
             </button> -->
        </div>
        <div class="product-bottom justify-content-center text-center">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
                           
            <h5 >{{dressTea.name}}</h5>
            <p>{{dressTea.price}}</p>
            <button class="cart">Add To Cart</button>
        </div>  <!-- end of product1-buttom -->

      </div>
    </div>
   </div>
</template>
<script>
    import dressesTea from "../json/dressesTea";
    export default {
      data() {
        return {
            dressesTea: dressesTea,
        };
      },
      name: "dressesTea",
      components: dressesTea,
    };
    </script>
    <style>
      .tea p{
        font-size: 15px;
        margin-bottom: 5px;
        font-size: 14px;
         opacity: .7;
         font-weight: bold;
    }
    .tea h5{
      font-size: 20px;
    }
    .product-bottom i {
      font-size: 13px;
      margin-top: 15px;
      margin-bottom: 10px;
      justify-items: center;
    }
    .product-bottom{
      margin-left: -30px;
    }
    .lay{
      position: relative;
    }
    .lay button{
      position: absolute;
      top: -2px;
      right: 40px;
      outline: none;
      user-select: none;
      border: none;
    }
    .lay img{
      border-radius: 10px;
      transition: all 1s;
    }
    .lay img:hover{
      box-shadow: 3px 3px 20px gray;
    }
    .cart{
     border: none;
     border-radius: 7px;
     padding: 2px 10px;
     margin-bottom: 15px;
    }
    .cart:hover{
      color: white;
      background-color: rgb(33, 33, 106);
    }
    </style>