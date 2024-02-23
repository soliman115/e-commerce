<template>
  <div class="container">
    <div>
      <welcomeMens />
    </div>
    <div>
      <menFilter />
    </div>

    <div>
      <jacketsmens />
    </div>

    <div>
      <Tshirtsmens />
    </div>
     

    <div>
      <jeansMens />
    </div>
    
    
  </div>
</template>
<script>
import menFilter from "../components/menFilter.vue";
import welcomeMens from "../components/welcomeMens.vue";
import jacketsmens from "../components/jacketsmens.vue";
import Tshirtsmens from "../components/Tshirtsmens.vue";
import jeansMens from "../components/jeansMens.vue";

export default {
  components: {
    menFilter,
    welcomeMens,
    jacketsmens,
    Tshirtsmens,
    jeansMens,
    
  },
  name:"mens",

};
</script>
