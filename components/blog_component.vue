<template>
    <!-- Header in all page-->
     <!-----First Blog -->


  <div  class=" container d1 my-5" >
    <div class="mt-2 position-relative father">
    <p>&nbsp;</p>
    </div>
        <div class="col-12">
            <p class="text-center mt-5 display-3 p-4 " id="pmain"> Read About Fashion </p>
        </div>
        <!-- photo-->

         <div class="row row2 " >
           <div class=" row1 col-lg-3 col-md-4 col-sm-12 col-xs-12 " >
                <p id="gmain" class="text-white fs-4 fw-semibold">Top 10 Fashion of the Week</p>
                <div>
                    <p class="text-muted fs-6">Lorem ipsum</p>
                    <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem necessitatibus deleniti sequi at deserunt impedit reprehenderit rem fugiat expedita, optio voluptatibus molestias? Nihil voluptas error provident, unde perferendis explicabo.</p>
                    <br>
                    <p class="text-warning fw-bold"> READ MORE</p>
               </div>
            </div>
         
          
          
             <div class=" row1  col-lg-3 col-md-4 col-sm-12 col-xs-12 " >
                <p id="gmain2" class="text-white fs-4 fw-semibold">Best brands for fashion</p>
                 <div>
                    <p class="text-muted fs-6">Lorem ipsum</p>
                    <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem necessitatibus deleniti sequi at deserunt impedit reprehenderit rem fugiat expedita, optio voluptatibus molestias? Nihil voluptas error provident, unde perferendis explicabo.</p>
                    <br>
                    <p class="text-warning fw-bold"> READ MORE</p>
               </div>
             </div>      
                      
          
            <div class=" row1 col-lg-3  col-md-4 col-sm-12 col-xs-12-4 " >
                <p id="gmain3" class="text-white fs-4 fw-semibold">Fashion Tips & Tricks</p>
                 <div>
                    <p class="text-muted fs-6">Lorem ipsum</p>
                    <p class="fs-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolorem necessitatibus deleniti sequi at deserunt impedit reprehenderit rem fugiat expedita, optio voluptatibus molestias? Nihil voluptas error provident, unde perferendis explicabo.</p>
                    <br>
                    <p class="text-warning fw-bold"> READ MORE</p>
               </div>
             </div>
          
            </div>
    </div>
        
   
    </template>
    <style scoped>
    
   *{ padding: 0px;margin: 0px; }

    #pmain{
        font-size: 50px;
    
    }
    #gmain{
        background-image: url("../images/slider2.jpg");
        background-size: cover;
        background-position: center;
        height:500px;
        /*max-width: 430px;;*/
        display: flex;
        align-items: flex-end;
    }
    #gmain2{
        background-image: url("../images/slider3.jpg");
        background-size: cover;
        background-position: center;
        height:500px;
       /* max-width: 430px;;*/
        display: flex;
        align-items: flex-end;
    }
    #gmain3{
        background-image: url("../images/slider4.jpg");
        background-size: cover;
        background-position: center;
        height:500px;
        /*max-width: 430px;;*/
        display: flex;
        align-items: flex-end;
    }
    .row1{
        border: 1px solid gainsboro;
       
    }
   


    .row2{
      
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
           
    }
    .d1{ 

            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-left: 5%;
            margin-right: 0px;
            

    }
    </style>