<template>
    <div class="container filter fshose justify-content-center text-center">
      <button class="col-12 col-md-6 col-lg-4" @click="showwomens()">Womens Shoses</button>
      <button class="col-12 col-md-6 col-lg-4" @click="showHeals()">Heals</button>
      <button class="col-12 col-md-6 col-lg-4" @click="showmens()">Mens Shose</button>
    </div>
  </template>
  <script>
      export default{
       
          methods: {
            showwomens(){
                  this.$router.push('./womensShoses')
              },
              showHeals(){
                this.$router.push('./healsShose')
              },
              showmens(){
                this.$router.push('./mensShose')
              }
          },
      }
  </script>
  <style>
  .fshose{
    margin-top: 150px;
  }
  </style>