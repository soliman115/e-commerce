<template>
    <div class="container welcome">
       <h1 class="maintitle">Welcome To Mens's Shop</h1>
       <div class="row">
           <div v-for="welcomeMen in welcomeMens" :key="welcomeMen.id" class="col-12 col-lg-6 mt-3">
               <div class="flip-box mb-5">
                   <div class="flip-img">
                       <div class="front">
                       <img :src="welcomeMen.image[0]" alt="" class="mainimg">  
                   </div> <!-- front -->
                   <div class="back">   
                       <img :src="welcomeMen.image[1]" alt="" class="mainimg">
                       </div> <!-- back -->
                   </div>  <!-- col-3 -->
               </div>  <!-- flip-box -->
           </div>
       </div>
       <p class="found">You Can Found Everything</p> 
    </div>
   </template>
   <script>
       import welcomeMens from "../json/welcomeMens";
       export default {
         data() {
           return {
            welcomeMens: welcomeMens,
           };
         },
         name: "welcomeMens",
         components: welcomeMens,
       };
       </script>
       <style>
         
         .flip-box{
           width: 400px;
           height: 300px;
           perspective: 1000px;
           border-radius: 10px;
           margin: auto;
         }
         .flip-img ,
         .front ,
         .back{
           width: 100%;
           height: 100%;
         }
         .flip-img img{
           width: 100%;
           height: 100%;
           border-radius: 5px;
         }
         .flip-img{
           position: relative;
           transform-style: preserve-3d;
           transition: .5s;
           box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.2);
          /* border: 5px solid white;*/
           border-radius: 5px;
         }
         .front{
           position: absolute;
           cursor: pointer;
           backface-visibility: hidden;
           box-sizing: border-box;
         }
         .back{
           transform: rotateY(180deg);
         }
         .flip-box:hover .flip-img{
           transform: rotateY(180deg);
         }
         .found{
           font-size: 18px;
           color: rgba(1, 1, 1, 0.6);
           letter-spacing: 1px;
           margin-top: 0px;
           text-align: center;
       }
       </style>