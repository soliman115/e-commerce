<template>
    <div class="container mb-5">
      <div>
        <welcomeWomens/>
      </div>
      
      <div>
        <womensFilter />
      </div>
  
      <div>
        <teaDress />
      </div>
  
      <div>
        <mixedClosesWomen />
      </div>
      
      <div>
        <sowaraDreses />
      </div>
    </div>
  </template>
  <script>
  
  import womensFilter from "../components/womensFilter.vue";
  import welcomeWomens from "../components/welcomeWomens.vue";
  import teaDress from "../components/teaDress.vue";
  import mixedClosesWomen from "../components/mixedClosesWomen.vue";
  import sowaraDreses from "../components/sowaraDreses.vue"
  export default {
    components: {
      welcomeWomens,
      womensFilter,
      teaDress,
      mixedClosesWomen,
      sowaraDreses
      
    },
    name:"womens",
  
  };
  </script>
  