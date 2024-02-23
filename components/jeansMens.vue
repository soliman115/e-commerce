<template>
  <div class="container mb-5">
  <div class="m-0 jeans">
    <h1 class="maintitle">Jeans</h1>
    <div class="row jeans">
      <div v-for="mensJean in mensJeans" :key="mensJean.id" class="col-12 col-sm -6 col-md-4 col-lg-3 col-xl-2 mt-3 justify-content-between p-2 align-items-lg-baseline">
      <div class="content align-items-baseline">
        <img :src="mensJean.image" class="mainimg"/>
        <h5 class="text-center mt-3">{{ mensJean.name }}</h5>
        <p>{{ mensJean.price }}</p>
        <button :disabled="mensJean.instock==0" class="">+</button>
        <!-- <div class="d-flex justify-content-between align-items-baseline">
           <p :class="[mensJean.instock>=20?'more':'',mensJean.instock<20?'less':'',mensJean.instock==0?'none':'']">InStock : <span>{{mensJean.instok}}</span></p>
           <button :disabled="mensJean.instock==0">+</button>
        </div> -->
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
    import mensJeans from "../json/mensJeans";
    export default {
      data() {
        return {
            mensJeans: mensJeans,
        };
      },
      name: "mensJeans",
      components: mensJeans,
    };
    </script>
    <style>
        .jeans img{
            width: 170px;
            height: 200px;
        }
        .jeans .content{
            width: 170px;
        }
        .jeans h5{
            font-size: 18px;
           
        }
        .jeans p{
        font-size: 14px;
         opacity: .7;
         font-weight: bold;
        }
        .jeans button{ font-size: 15px;
            text-align: center;
            margin-bottom: 10px;
            margin-top: 0px;
            border: none;
            padding: 2px 5px;
           color: rgb(33, 33, 106);
        }
        .jeans button:hover{
            color: white;
            background-color: rgb(33, 33, 106);
        }
        .jeans .content:hover{
           transform: scale(1);
           box-shadow: 5px 5px 50px gray;
        }
        .more{
            color: blue;
          }
          .less{
            color: orange;
          }
          .none{
            color: red;
          }
          .less,.more,.none{
            font-weight: bold;
          }
    </style>