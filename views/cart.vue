<template>
  <div class="container">
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
             <td><button class="btn btn-success">+</button> | <button class="btn btn-danger" v-if="item.product.stock>=1" @click="decrement(item.product.id)">-</button></td>
             <td>{{item.quantity*item.product.price}}</td>
             <td><button class="btn btn-danger" v-on:click="removeItemFromCart(product)">X</button></td>
          </tr>
        </tbody>

      </table>
 </div>
</template>
<script>
  export default{
     data() {
        return {
           
            cart:{
                items:[],
            }
        }
     },
    }
  
  </script>