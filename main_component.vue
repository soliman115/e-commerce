<template>

   <!--<h2>it is work</h2>-->
<div class="countainer" style="width:99.21%" > 
<div class="row">
  <nav id="nav1" class="navbar navbar-expand-lg navbar-light fixed-top " style="background-color:gray;width:100.9% ">
  <div class="container-fluid">
    
      <div class="v-toolbar__title col-xs-1 " style="position: ;">
        <router-link to="/" class="white--text" style="text-decoration: none;">
          <i class="fa-solid fa-bag-shopping fa-2x " style="color:white ;"></i>
          &nbsp;<span style="color:white ; font-weight: bold; font-size: 24px;">ShipIT</span>
        </router-link>
      </div>
   
     
      <section class="col-md-4 col-sm-3 col-xs-1 d-none d-md-block" style="background-color:white; height: 50px ; border-radius: 10px; margin-left:40px">
        <form id="search" class="d-flex"  >
          <button class=" isearch" type="submit"><i class="fa-solid fa-magnifying-glass" style="color:brown ;"></i></button> 
          <input class="form-control me-2 "  type="search" placeholder=" Search " aria-label="Search " >
         <!--<button class="btn btn-outline-success" type="submit">Search</button>-->  
        </form> 
      </section>
     

      <div class="col-lg-0" style="  display:flex ;flex-wrap: wrap; justify-content: space-between;">
          <button type="button" class="btn btn-outline-success  ibutton"   >
             <span class="v-btn__content"><i class="fa-solid fa-user fa-2x" style="color:blanchedalmond ;"></i></span>
          </button>
          <button type="button" class="btn btn-outline-success ibutton" >
             <span class="v-btn__content"><i class="fa-solid fa-bell fa-2x"></i></span>
          </button>
          <button type="button" class="btn btn-outline-success ibutton"  >
             <span class="v-btn__content"><router-link to="/cart"><i class="fa-solid fa-cart-shopping fa-2x"></i></router-link></span>
          </button>
      </div>
  </div>

</nav>
</div>


<!------------------------------------------------------------------------------------------------>
 <div class=" row nav-scroller bg-body shadow-sm secoundnav">
  <nav  aria-label="Secondary navigation col-xs-12">
  
    <button class=" nav-link bt"> <router-link  to="/">Home</router-link></button>

    <button class=" dropdown nav-link bt"  type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
       Shop
    </button>
    <ul class="dropdown-menu" >
      <li><button class="dropdown-item " type="button"> <router-link  to="/men">Men</router-link></button></li>
      <li><button class="dropdown-item " type="button"><router-link to="/womens"> Womens </router-link></button></li>
      <li><button class="dropdown-item " type="button"><router-link to="/Shoses" >Shose </router-link></button></li>
      <li><button class="dropdown-item " type="button"><router-link to="/Bags"> Bags </router-link></button></li>

    </ul>

     <!--<span class="badge bg-light text-dark rounded-pill align-text-bottom">27</span>-->
     <button class="bt  nav-link"><router-link to="/Proudcts"> Product</router-link></button>
    
    <button class="bt  nav-link"><router-link  to='/blog'>blog</router-link></button>    
   <!--------------------------------------------------------------------------------------->
 


  </nav>
  </div>
 

  <div>
    <router-view></router-view>
  </div>

<!-- footer-->
  <div class="main_footer row ">
    <div class="  col-xs-12  col-sm-12 col-lg-8 ">
                <div class=" d-flex justify-content-center align-items-center flex-row">
                   <p><router-link  to="/"><i class="fa-solid fa-house fa-1x text-light p-4" id="but"></i></router-link>   </p>
                    <p><i class="fa-solid fa-envelope fa-1x text-light p-4"  id="but"></i> </p>
                    <p>  <i class="fa-solid fa-calendar-minus fa-1x text-light p-4"  id="but"></i> </p>
                    <p><i class="fa-solid fa-trash fa-1x text-light p-4"  id="but"></i> </p> 
                </div>
                
                <div class=" d-flex justify-content-center align-items-center flex-row " style="margin-left:25px ; margin-right:25px ;">
                    <p id="n" class="text-light ">Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
      
                <div class=" d-flex justify-content-center align-items-center flex-row ">
                    <p class="text-light"> 2022  — <span class="fw-bold">ShipIT</span></p>
                </div>
    </div>
  </div>
</div>            
</template>


<script>

 import home_component from './components/home_component.vue' 
import blog_component from './components/blog_component.vue' 


export default {
  name: 'App',
  name:' home_component',
  name:' blog_component',
  components: {
    home_component,
    blog_component
  },
  data(){
    return{
      home_component,
    blog_component
    }
  }


}
</script>


<style>

  *{
    
    margin: 0px;
    padding: 0px;
  }
   .dropdown :hover .dropdown-menu{
     
    visibility: visible;

   }
   .nav-scroller {
    width:101.5%;
    margin-right: 0px;
   }
   


  .dropdown-menu{
     
    width: max-content;

   }

   .ibutton{
    border-radius:50% ; 
    border-style: hidden;
    width:60px;
    height: 60px;
    color: aliceblue;
   
  }
  #search{
     margin-top:2px; 
     margin-bottom:2px ;
     margin-right: 0px ;
   } 
  #search button{
     border-bottom-left-radius:10px ; border-style:hidden ;
     border-top-left-radius:10px ;
  } 
  #search input{
   border-top-right-radius:10px ;
    border-bottom-right-radius:10px ;
      border-style:none ;
       height: 45px;/* width: 610px;*/
        margin-right: 0px ;
   
  }

 .secoundnav{
   position: relative;
   top:75px;
   
   display:flex;
   flex-direction: row;
   justify-content: center;
  
   align-items: center
  }

 .secoundnav nav{
   margin: 0px;
    display:flex;
 
   flex-direction: row;
   justify-content: center;
  
   align-items: center
   
  }

.secoundnav nav button{
  border-style: hidden;
  background-color: white;
  opacity: 0.5;
  }
 .bt{
  margin: 7px;
 }
   .bt:hover {
  background-color: rgb(193, 216, 237); 
  opacity: 1;
}

.main_footer{
        background-color: #2d3753;
        display: flex; flex-direction: column;
         justify-items: center;
          justify-content: baseline;
          align-items: center;
          margin-right: 0px;
          width:101.6%
    }
    #n{
      margin: left 200px; ;
      margin: right 200px; ;
      font-size: 16px;
      font-weight:normal;
        text-align: center;
    }
    #but:hover{
        cursor: pointer;
        background-color: rgb(220 220 220/50%);
        border-radius: 50%;
        transform: scale(0.5);
    }
/***************************************************** */
    #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 0px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}











</style>









