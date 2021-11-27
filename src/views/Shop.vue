<template>
  <div v-if="overallPrice != 0">
   <!-- <div>Total Price: ${{overallPrice}}.00</div>  -->
   <div>Total Price: ${{overallPrice2}}.00</div> 
  <div :key="index" v-for="(cart_item,index) in cart">
                 <ShopItemCard :item="cart_item.item"/>
                 {{setQuantity(cart_item.quantity)}}
                <div>Quantity:{{quantity}} x ${{cart_item.item.price}}.00</div>
                <div>Item Price ${{getTotalItemPrice(quantity,cart_item.item.price)}}.00</div>
                <br>
                <button class= "btn btn-primary px-2 m-1" @click="decrementQuantity">-</button>
                <input v-model="quantity" placeholder="quantity"/>
                <button class="btn btn-primary px-2 m-1"  @click="incrementQuantity">+</button>
                <br>

  </div>

  <div>
            <input v-model="coupon" placeholder="Enter Coupun Here"/>
            <button  @click="checkCoupon">Submit Coupon</button>
            <input v-model="checkout" placeholder="Enter Money"/>
            <button  @click="checkOut">Checkout</button>
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
    getTotalItemPrice(x,y) {
      return x * y;
    },
      incrementQuantity(){
      // if(this.quantity < this.filteredItem.quantity ){
        this.quantity++;
      // }
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

       console.log(code +""+ total);
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

.my-card{
  padding: 10px;
  margin: 10px auto;
  max-width: 500px;
  color: white;
  background-color: rgb(98, 20, 172);
}
</style>
