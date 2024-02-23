<template>
  <div class="container filter">
    <button class="col-12 col-md-6 col-lg-4" @click="showjakets()">Jakets</button>
    <button class="col-12 col-md-6 col-lg-4" @click="showTshirt()">T-Shirts</button>
    <button class="col-12 col-md-6 col-lg-4" @click="showjeans()">Jeans</button>
  </div>
</template>
<script>
  //import filter from "../router/filter.js"
    export default{
      // components:{
      //   filter
      // },
        methods: {
          showjakets(){
                this.$router.push('./jacketsmens')
            },
            showTshirt(){
              this.$router.push('./Tshirtsmens')
            },
            showjeans(){
              this.$router.push('./jeansMens')
            }
        },
    }
</script>
<style>
.filter button {
  margin-right: 60px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 200px;
  border-radius: 20px;
  border: none;
  outline: none;
  height: 40px;
  font-size: 17px;
    font-weight: bold;
}
.filter button:active {
  background-color: rgb(33, 33, 106);
  color: white;
}
.filter{
  margin-top: 100px;
  margin-bottom: 150px;
}
</style>
