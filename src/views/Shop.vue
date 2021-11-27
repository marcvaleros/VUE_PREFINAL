<template>
  <div v-if="overallPrice != 0 && isPurchased == 0">
  
  <div class="checkout-style">
    <div class="big-text">Total Price: ${{overallPrice2}}.00</div> 
    <button class="btn btn-primary" @click="checkCoupon">Submit Coupon</button>
      <input v-model="coupon" placeholder="Enter Coupun Here"/>
      <button  type="button" class="btn btn-primary big-text" data-toggle="modal" data-target="#exampleModal" @click="verifyPayment">Checkout</button>
    <input v-model="checkout" placeholder="Enter Money"/>
  </div>

    <div class="card-container" :key="index" v-for="(cart_item,index) in cart">
      <ShopItemCard :item="cart_item.item"/>

      <div class="details">
        <p>{{setQuantity(cart_item.quantity)}}</p>
        <div>Quantity:{{quantity}} x ${{cart_item.item.price}}.00</div>
        <div>Item Price ${{getTotalItemPrice(quantity,cart_item.item.price)}}.00</div>
      </div>

      <div class="inputQuantity">
        <button class= "btn btn-primary px-5 m-1" @click="decrementQuantity">-</button>
        <input v-model="quantity" placeholder="quantity"/>
        <button class="btn btn-primary px-5 m-1"  @click="incrementQuantity">+</button>
      </div>

    </div>


  </div>



</template>

<script>

import ShopItemCard from '@/components/ShopItemCard.vue';

export default {
  name: 'Shop',
  components:{
    ShopItemCard
  },
  data() {
    return {
      coupon: "",
      checkout: "",
      quantity: 0,
      isPurchased: 0,
      allPrice: this.overallPrice,
      cart: this.$store.state.cart,
      items: this.$store.getters.ItemCart,
      count:  this.$store.getters.count
    }
  },
  computed:{
      overallPrice: function(){
        return this.$store.getters.TotalPrice;
      },
      overallPrice2: function(){
        return this.$store.state.totalprice;
      }
  },
  methods: {
    verifyPayment(){
      if(parseInt(this.checkout,10) >= this.overallPrice2){
        alert("Purchase Success");
        this.checkout = "";
        this.isPurchased = 1;
      }else{
        alert("Checkout Fail");
      }
    },
    getTotalItemPrice(x,y) {
      return x * y;
    },
      incrementQuantity(){
        this.quantity++;
    },
    decrementQuantity(){
      if(this.quantity > 0){
        this.quantity--;
      }
    },
    setQuantity(quantity){
      this.quantity = quantity;
    },
    checkCoupon(){
       let total = this.$store.getters.TotalPrice;
       let code = this.coupon;
       let savings;
       let percent;

        if(total != 0){
          if(code == "menu50"){
              percent = 50/100;
              savings = total * percent;
              this.$store.state.totalprice = total - savings;
            }else if(code == "menu20"){
              percent = 20/100;
              savings = total * percent;
              this.$store.state.totalprice = total - savings;
            }else if(code == "menu10"){
              percent = 10/100;
              savings = total * percent;
             this.$store.state.totalprice  = total - savings;
          }else if(code == "menu200flat" && total > 1000){
              this.$store.state.totalprice = total - 200;
          }
        }
    }
    
  }
  
};
</script>

<style>


.btn{
  margin: 10px !important;
}

.inputQuantity{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}

.card-container{
  display: flex;
  margin: 50px;
  background-color: rgb(255, 255, 255);
  justify-content: center;
  flex-direction: column;
  border-radius: 8px ;
}
.checkout-style{
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  padding: 10px;
  margin: 50px;
  background-color: #ff4800;
  justify-content: space-evenly;
}

.big-text{
  color: #ffffff;
  font-size: 30px;
  background-color: #ff4800;
}
.i-text{
  color: #ffffff;
  font-size: 14px;
}
</style>
