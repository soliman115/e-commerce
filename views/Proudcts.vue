<template>
  
    <div class="container" id="mainapp">
       <div>
        <div class="d-flex justify-content-between align-items-lg-baseline">
        <a href="">Products</a>
        <div class="text-primary d-flex align-items-lg-baseline">
          <p>[{{cart.items.length}}] <span v-if="cart.items.length==1">item</span> <span v-else>items</span> with total price [{{gettotalprice()}}] </p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-primary" @click="iscartvisible=true">Show Cart</button>
       </div>
       </div>
       </div>
          
         
    </div> <!--end of Banner-->

      <div class="container mb-5 showproduct" v-if="iscartvisible==false">
        <h1 class="maintitle">Our Products</h1>
        <div class="row">
          <div v-for="product in products" :key="product.id" class="col-12 col-md-6 lg-3 col-xl-4 mt-3 justify-content-between p-2 align-items-lg-baseline">
              <div class="productcontent">
              <img :src="product.img" class="card-img-top product-img" alt="">
              <div class="card-body">
                  <h5 class="card-title text-center">{{ product.title }}</h5>
                  <h6 class="card-title text-center">{{ product.price }} $</h6>
                  <p class="card-text">{{ product.description }}</p>
                  <div class="d-flex justify-content-between align-items-baseline">
                      <h5 v-if="product.stock == 0" class="text-danger">In Stock : {{ product.stock }}</h5>
                      <h5 v-else-if="product.stock < 5" class="text-warning">In Stock : {{ product.stock }}</h5>
                      <h5 v-else class="text-success">In Stock : {{ product.stock }}</h5>
                      <button :disabled="product.stock==0" :id="product.id" class="btn" @click="addProductToCart(product)">Add to cart</button>
                  </div>
              </div>
          </div>
      </div>
      </div>
      </div> <!--end of products-->
      <div class="container showcart mb-4" v-else>
        <h1 class="maintitle">Cart</h1>
        <h3 v-if="cart.items.length==0" class="text-danger text-center my-2">Sorry , Your Car is Empty , Please Add Products....</h3>
        <table class="table table-striped table-borderd text-center my-2" v-else>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Add | Remove</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.items" :key="item.id">
                 <td>{{item.product.id}}</td>
                 <td>{{item.product.title}}</td>
                 <td>{{item.product.price}}</td>
                 <td>{{item.quantity}}</td>
                 <td><button class="btn btn-success" :disabled="item.product.stock<=0" @click="increaseQtn(item)" >+</button>
                  |
                <button class="btn btn-danger" @click="decreaseQtn(item)">-</button></td>
                 <td>{{item.quantity*item.product.price}}</td>
                 <td><button class="btn btn-danger" @click="removeItemFromCart">Remove</button></td>
              </tr>
               
              
            </tbody>

          </table>
          <div v-if="cart.items.length>0">
          <h5 class="text-center mt-3">TotalCost = {{subTotal}} $</h5>
          <h5 class="text-center mt-3">TotalCost After The Tax= {{total}} $</h5>
        </div>
        <b-row v-if="cart.items.length>0" class="text-center justify-content-center">
           
             <button class="btn btn-primary cbc" @click="clean">
               Clean
             </button>

             <button class="btn btn-primary cbc" @click="buy">
              Buy
            </button>
          </b-row>

          
           
          <div class="container Purchase" ref="input">
            
            
            <h4>Purchase Completed</h4>
            <p class="my-3">Products</p>
             <ul v-for="productFinal in cart.items" :key="productFinal.id">
               <li style="color:blue;">
                Product name : {{ productFinal.product.title }}
               </li>
               <li>
                Quantity : {{ productFinal.quantity }}
               </li>
               <li>
                Price : {{ productFinal.product.price }}
               </li>
               <li>
                Total : {{ productFinal.product.price * productFinal.quantity }}
               </li>
               <li>
                Total plus Tax : {{parseInt(.1 * productFinal.product.price + productFinal.product.price * productFinal.quantity)}}
               </li>
              
               <hr>
             </ul>
            <h5 class="my-2">Total Cost :{{ total }} $</h5> 
             <button @click="clean" class="btn btn-primary m-auto d-block">Close</button>
          </div>
        
     </div>
    
</template>
<script>
  import products from "../json/products"
  export default{
   data() {
      return {
          products:products,
          iscartvisible:false,
          cart:{
              items:[],
              totalCost: 0,
          }
      }
   },
    name: "Proudct",
    components: {
         products,
      },
      methods:{
         addProductToCart(product){
          if(!this.checkExist(product)){
            this.cart.items.push({ 
              product:product,
              quantity:1
             })

          }else{
            let targetitem =null;
            for(let i =0;i<this.cart.items.length;i++){
              targetitem=this.cart.items[i];
              break;
            }
            targetitem.quantity++;
          }
          product.stock--;
          alert("Are You Sure For Added This Product ?!")
           
          },
          checkExist(product){
            let existflag=false;
            for(let i=0;i<this.cart.items.length;i++)
            {
                if(this.cart.items[i].product.id==product.id)
                {
                  existflag=true;
                   break;
                }
            };
          
            return existflag;
          },
          
          gettotalprice(){
             let result=0;
              for(let i=0;i<this.cart.items.length;i++){
                result+=this.cart.items[i].product.price*this.cart.items[i].quantity;
             }
             return result;
          },
          increaseQtn(item){
            if(item.product.stock==0){
              alert("Sorry You Can not Add This Product")
            }
            else{
              item.quantity++;
              item.product.stock--;
            }
        },
        decreaseQtn(item){
          item.quantity--;
          if(item.quantity === 0){
            this.cart.items.splice(this.cart.items.indexOf(item),1);
            item.product.stock++;
          }
        },
        removeItemFromCart(product) {
      this.cart.items.splice(this.cart.items.indexOf(product), 1);
       },
       clean(){
         this.cart.items=[];
         for(const key in this.products){
          this.products[key].cart=false
          this.products[key].quantity=1
          this.products[key].stock++
         }
         this.$refs['input'].hide()
       },
       buy(){
        this.cart.items={
          products: this.cart,
          total:this.total
        
        }
        this.$refs['input'].show()
      }
        },
       
        computed:{
          subTotal(){
            var subCost=0;
            for(var i in this.cart.items){
              var individuoItem= this.cart.items[i];
              subCost += individuoItem.quantity *individuoItem.product.price;
            };
            return subCost
          },
          total(){
            var tax=.1;
            var totalCost=this.subTotal;
            return parseInt(totalCost * tax + totalCost) ;
          },
          
        }
            }
            
 
</script>

<style>
  #mainapp{
    margin-top: 95px;
    margin-bottom: 0px;
  }
  .showproduct .maintitle , .showcart .maintitle{
    margin-top: 10px;
  }
.productcontent{
    border: 1px solid black;
    width: 350px;
    margin: auto;
}
.productcontent img{
    margin-top: 0px;
    height: 370px;
  margin-bottom: 10px;
}
.card-body{
    margin-top: -15px;
}
.productcontent button{
    background-color: rgb(183, 178, 178);
    color: black;
}
.productcontent button:hover{
    background-color: rgb(33, 33, 106);
    color: white;
}
.productcontent p{
    font-size: 18px;
}
.productcontent h6{
    opacity: .7;
}
.cbc{
  margin-left: 40px;
  padding: 5px 20px;
  margin-top: 18px;
}
.Purchase{
  border: 1px solid black;
  width: 30%;
  margin-top: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
}
.Purchase{
  margin-left: auto;
}

</style>