<template>
    <div class="container filter filterwonen">
      <button class="col-12 col-md-6 col-lg-4" @click="showTea()">Tea Lenght Dresses</button>
      <button class="col-12 col-md-6 col-lg-4" @click="showMixed()">Mixed Closes For Womens</button>
      <button class="col-12 col-md-6 col-lg-4" @click="showSowara()">Sowara Dreses</button>
    </div>
  </template>
  <script>
      export default{
       
          methods: {
            showTea(){
                  this.$router.push('./teaDress')
              },
              showMixed(){
                this.$router.push('./mixedClosesWomen')
              },
              showSowara(){
                this.$router.push('./sowaraDreses')
              }
          },
      }
  </script>
  <style>
  .filterwonen button{
    width: 300px;
    border-radius: 80px;
    font-size: 17px;
    font-weight: bold;
  }
  </style>