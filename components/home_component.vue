<template>
 <!-- carousel   -->

    <div id="carouselExampleCaptions_1" class="carousel slide " data-bs-ride="false" style="height:500px ; width:100.7%">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions_1" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions_1" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions_1" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner" style=" height:450px ;" >
            <div class="carousel-item active"  >
                <img src="../images/36.jpg" class="slide_img d-block w-100 img_c" alt="..." style=";" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item" >
                <img src="../images/35.jpg" class=" slide_img d-block w-100 img_c" alt="..." style="" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item" >
                <img src="../images/34.jpg" class="slide_img d-block w-100 img_c" alt="..." style="" >
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions_1"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions_1"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- end carousel ------------------------------------------------------------------------------>


    <div class="countainer" >   
    <div  class="row mt-5  cards_holder1 "  >
       <div class=" col-md-6 col-sm-6 col-xs-12  card1" >
        <div class="card text-bg-dark">
            <img src="../images/4-.jpg" class="card-img" alt="...">
            <div class="card-img-overlay position-absolute top-50 start-50 translate-middle over_card" >
               <h2 class="card-title" >Top Picks</h2>
               <button class="btn_card1"><router-link  to="/mixedClosesWomen">Shop Now </router-link></button> 
            </div>
        </div>
       </div>
       <!---->   
       <div class="col-md-6 col-sm-6 col-xs-12 card1" >
        <div class="card text-bg-dark">
            <img src="../images/3-.jpg" class="card-img" alt="...">
             <div class="card-img-overlay position-absolute top-50 start-50 translate-middle over_card">
                <h2 class="card-title">New Arrivals</h2>
               <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>-->
                <button class="btn_card1"><router-link  to="/womens">Shop Now </router-link></button> 
             </div>
         </div>
        </div>   
    </div>
    </div>
    <!------------------------------------------------------------------------------------------------------>
    <div class="countainer">
    <div  class="row mt-2 cards_holder2"  >
       <div class="col-md-4 col-sm-12 col-xs-12 card2" >
        <div class="card text-bg-dark">
            <img src="../images/t-shirt.jpg" class="card-img" alt="..."   >
            <div class="card-img-overlay position-absolute top-50 start-50 translate-middle over_card">
               <h3 class="card-title">Lorem & Ipsum</h3>
               <a href="/shop" class="white--text caption v-btn v-btn--flat v-btn--text theme--light v-size--default"> 
                    <router-link  to="/men"> <span class=" card2span">
                        <!--<i aria-hidden="true" class="v-icon notranslate white--text caption mdi mdi-arrow-right theme--light"></i>-->
                        <h6>  SHOP NOW &nbsp;  </h6>  
                        <i class="fa-solid fa-right-long"></i>
                    </span></router-link>
                </a>
            </div>
        </div>
       </div>
       <!---->   
       <div class="col-md-4 col-sm-12col-xs-12 card2" >
        <div class="card text-bg-dark">
            <img src="../images/jeans.jpg" class="card-img" alt="...">
             <div class="card-img-overlay position-absolute top-50 start-50 translate-middle over_card">
                <h3 class="card-title">Lorem & Ipsum</h3>
                <a href="/shop" class="white--text caption v-btn v-btn--flat v-btn--text theme--light v-size--default"> 
                     <router-link  to="/jeansMens">  <span class=" card2span">
                      <h6>  SHOP NOW &nbsp;  </h6> 
                        <i class="fa-solid fa-right-long"></i> 
                    </span></router-link>
                </a>
             </div>
         </div>
        </div>   
        <!---->   
       <div class="col-md-4 col-sm-12 col-xs-12 card2 " >
        <div class="card text-bg-dark">
            <img src="../images/shoes.jpg" class="card-img" alt="...">
             <div class="card-img-overlay position-absolute top-50 start-50 translate-middle over_card">
                <h3 class="card-title">Lorem & Ipsum</h3>
                <a href="/shop" class="white--text caption v-btn v-btn--flat v-btn--text theme--light v-size--default"> 
                     <router-link  to="/Shoses">  <span class=" card2span">
                      <h6>  SHOP NOW &nbsp;  </h6>  
                        <i class="fa-solid fa-right-long"></i>
                    </span></router-link>
                </a>
             </div>
         </div>
        </div> 
    </div>
</div>
    <!--------------------------------------------------------------------------------------------------------->
    <div class="countainer countainer3">
      <div class="row">
        <div class="alert alert-light mt-5 col-lg-12 col-md-8 col-sm-10 col-xs-10" role="alert " style="border-bottom:3px ;">
           <h4>Deals of the Day</h4>
        </div>
      </div>
    
    
    <div  class="  cards_holder3  row"  >
         <div class="card3  col-md-3 col-sm-6 col-xs-5 text-center">
           <div class="card " >
              <img src="../images/bag.jpg" class="card-img-top" alt="...">
              
              <div class="card-body">
                <h5 class="card-title">Bags & Purses</h5>
                <p class="card-text">Upto 60% + Extra 10%</p>
                <router-link class="btn  card3btn" to="/Bags"> EXPLORE</router-link>
              </div>
           </div>
          </div>
        <!----> 
           <div class="card3 col-12 col-md-3 col-sm-6 col-xs-5 text-center ">
            <div class="card" >
              <img src="../images/t-shirt.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">T-Shirt</h5>
                <p class="card-text">Upto 50% + Extra 10%</p>
                <router-link class="btn  card3btn" to="/Tshirtsmens">EXPLORE</router-link>
              </div>
            </div>
           </div>
       <!----> 
          <div class="card3 col-12 col-md-3 col-sm-6 col-xs-5 text-center ">
           <div class="card" >
              <img src="../images/jeans.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Jeans</h5>
                <p class="card-text">Upto 60% + Extra 10% </p>
               <router-link class="btn  card3btn" to="/jeansMens">EXPLORE</router-link>
              </div>
           </div>
          </div>
        <!---->
          <div class="card3 col-12 col-md-3 col-sm-6 col-xs-5 text-center ">
           <div class="card" >
              <img src="../images/shoes.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Shoes</h5>
                <p class="card-text">Upto 60% + Extra 10% </p>
                <router-link class="btn  card3btn" to="/Shoses">EXPLORE</router-link>
              </div>
           </div>
          </div>
    </div> 
   </div>
 <!------------------------------------------------------------------------------------------------------------------------------>

   <div class="countainer res">
    <div class="mt-5 home_footer row mx-10%">  
        <div class=" home_footer_child col-sm-8 col-xs-8 col-lg-4 col-xl-3">
            <div><i class="fa-solid fa-truck fa-2x"></i></div>
            <div><h5 class="p1">FREE SHIPPING & RETURN </h5 ><p class="p2">Free Shipping over $300</p></div>
        </div> 
        <div class=" home_footer_child col-sm-8 col-xs-8 col-lg-4 col-xl-3">
             <div><i class="fa-solid fa-sack-dollar fa-2x"></i></div>
            <div><h5 class="p1">MONEY BACK GUARANTEE </h5><p class="p2">30 Days Money Back Guarantee</p></div>
        </div> 
        <div class=" home_footer_child col-sm-8 col-xs-8 col-lg-4 col-xl-3">
             <div><i class="fa-solid fa-headset fa-2x"></i></div>
            <div><h5 class="p1">020-800-456-747</h5><p class="p2">24/7 Available Support</p></div>
        </div>  
    </div>
   </div>


    


</template>





<style>
    *{
        margin: 0px;
        padding: 0px;
    }
/**/
.res{
    width: 100.8%;
}
#carouselExampleCaptions_1{

    position: relative;
    top:75px;
    width: 100%;
}



.carousel-item .img_c {
            width: 100%;
            height: 30%;
        }

        .row .image {
            position: relative;
            width: 100%;
            height: 50%;
        }

        .row .image:hover .social {
            visibility: visible;
        }

        .row img {
            width: 100%;
           
        }
        .card{
            margin-bottom: 20px;
        }
        .cards_holder1{
           
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-left: 10px;
            margin-right:10px ;
          /*  */
           
        }

   
        .card1 .card img{
            height:400px;
        }

        .btn_card1 :hover{
            color:darkred;

        }
/*********************************************** */
         .cards_holder2{
           
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-left: 10px;
            margin-right:10px ;
            
        }
          
       
        .card2 .card img{
            
          width: inherit; /* width of container */
          height: 300px; /* height of container */
          object-fit:cover;
          object-position: 20% 10%;   /* try 20px 10px */ 
            opacity: 0.8;
        }

        a{ 
            text-decoration:none;
            
        }

        .card2span{
           margin-top: 20px;
           
            color: white;
            display:flex;
            flex-direction: row;
            justify-content:center;
            align-items: center;

        }
        .card2span :hover{
           
            border: 3px;
            color: darkred;
            
        }
        
        .over_card{
            text-align:center ;
        }
         .over_card button{
             border-radius:5px ;
             background-color: unset;
             color: white;
             border-color:rgb(222, 188, 188) ;
             
        }

         .over_card h2,h3{
            
             color: white;
             font-weight: bold;
        }

/***************************************** */
    .countainer3{ 
      
        display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

        
    } 


     .cards_holder3{
            margin-left: 0%;
            margin-right: 0%;
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;


        }

       
      .card3 {
        
           margin-bottom: 12px;
        }

 
        .card3 :hover{
            box-shadow: inset;

          
        }
         .card3 img{
          width: inherit; /* width of container */
          height: 200px; /* height of container */
          object-fit:cover;
        object-position: 20% 10%;   /* try 20px 10px */ 
         }
         img{

            width: inherit; /* width of container */
          height: inherit; /* height of container */
           object-fit: cover;
         object-position: 20% 20%; /* try 20px 10px */ 
         }
         .card3btn{
           background-color: none;
           border-color: black;
         }

         .card3 .card-body{
          display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
      
         }
/************************************************************** */
         .home_footer{
            background-color:#3ae3d6;
             display:flex;
            flex-direction: row;
            justify-content:space-evenly;
            align-items: center;
            opacity: 0.8;
           
            margin-right: 0px;
         }

          .home_footer .home_footer_child{
            margin-top: 15px;
            margin-bottom: 15px;
            display:flex;
            flex-direction: row;
            justify-content:space-around;
            align-items: center;
         }

</style>
<script>
</script>