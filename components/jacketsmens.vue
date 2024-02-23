<template>
  <div class="container jakets mb-5">
    <h1 class="maintitle">Jackets</h1>
    <div class="row">
      <div v-for="mensJaket in mensJakets" :key="mensJaket.id" class="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3 justify-content-between p-2 align-items-lg-baseline">
        <div class="content justify-content-center text-center">
          <img :src="mensJaket.image" class="mainimg"/>
          <div class="hoverimg"> 
            <button @click="seemore()">View More</button>
          </div>
        <h5>{{ mensJaket.name }}</h5>
        <p>{{ mensJaket.price }}</p>
        <button class="cart">Add To Cart</button>
      </div>
    </div>
  </div>
  </div> 
</template>
<script>
import mensJakets from "../json/mensJakets";
export default {
  data() {
    return {
      mensJakets: mensJakets,
    };
  },
  name: "mensJakets", 
  components: mensJakets,
  methods: {
    seemore(){
                this.$router.push('./Proudcts')
            },
          }
};
</script>

<style>
  .mainimg{
    width: 220px;
    height: 280px;
    border-radius: 10px 10px 0px 0px;
  }
  .maintitle{
    font-size: 40px; 
    font-family: 'Sansita Swashed', cursive;
    text-align: center;
    color: rgba(1, 1, 1, 0.8);
    letter-spacing: 1.5px;
    text-shadow: 4px 2px 3px rgba(0,0,0,0.2);
    margin-top: 100px;
    margin-bottom: 30px;
  }
  .maintitle:hover{
    color: rgb(33, 33, 106);
  }
  .jakets h5{
    font-size: 20px;
    text-align: center;
    margin-top: 7px;
  }
  .jakets p{
    font-size: 15px;
    padding-bottom: 10px;
    font-size: 14px;
     opacity: .7;
     font-weight: bold;
     text-align: center;
     margin-bottom: 0px;
  }
  .content{
    margin: auto;
    margin-bottom: 18px;
    width: 220px;
    border-radius: 10px;
    background-color: #f7f7f8;
    box-shadow: 1px 1px 10px gray;
    position: relative;
    transition: all 3s;
    align-content: center;
    align-items: center;
  }
  .content:hover{
    transform: scale(1.1);
    transition: 2s;
    /*transition-timing-function: ease-in;*/
  }
  .content:hover .hoverimg{
    opacity: .5;
    transition-timing-function: ease-in;
  }
  .hoverimg{
    width: 220px;
    height: 280px;
    border-radius: 10px 10px 0px 0px;
    justify-items: center;
    position: absolute;
    top: 0%;
    background-color: gray;
    z-index: 1;
    opacity: 0;
  }
  .hoverimg button{
    position: absolute;
    top: 45%;
    left: 27%;
    font-size: 15px;
    font-weight: bolder;
    color: black;
    border: 2px solid black;
    border-radius: 5px;
   padding: 5px;
   opacity: 3;
  }
  .hoverimg button:hover{
    background-color: #f7f7f8;
    color: blue;
  }
  
</style>
