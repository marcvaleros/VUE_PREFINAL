<template>

  <div class="item-card-info">
      <ul>
        <li><img class="img-style-1" :src ="filteredItem.img" alt=""/><img></li>
        <li><span class="item-title">Name</span>{{filteredItem.name}}</li>
        <li><span class="item-title">Price</span>{{filteredItem.price}}</li>
        <li><span class="item-title">Quantity</span>{{filteredItem.quantity}}</li>
        <li><span class="item-title">Category</span>
            <span class="category-style" :key="index" v-for="(category,index) in filteredItem.category" >
              <span v-text="category"></span>
            </span>
        </li>
        <li><span class="item-title">Description</span>{{filteredItem.desc}}</li>

          <br>
        <button class= "btn btn-primary px-2 m-1" @click="decrementQuantity">-</button>
          <input v-model="quantity" placeholder="quantity"/>
           <button class="btn btn-primary px-2 m-1"  @click="incrementQuantity">+</button>
          <br>

        <router-link style="text-decoration: none; color: inherit;" to="/"><button class="btn btn-primary px-5 m-1">Back</button></router-link>
        <button @click="AddItemToCart(filteredItem)" class="btn btn-primary px-5 m-1" >Add To Cart</button>
     </ul>
  </div>

</template>

<script>
// import ItemDetails from '.src/components/ItemDetails.vue';
// import Input from '.src/components/Input.vue';

export default {
  name: 'ItemPage',
  components: {
    
  },
  data() {
    return {
      quantity: 0,
      id: this.$route.params.id,
      items: this.$store.state.items
    }
  },
  methods:{
    AddItemToCart(item){
      const cart_item = {item: item,itemID: item.id, quantity : this.quantity};
      this.$store.commit('ADD_TO_CART',{cart_item});
      this.quantity = 0;
    },
    onChange(text){
      this.quantity = text;
    },
    incrementQuantity(){
      if(this.quantity < this.filteredItem.quantity ){
        this.quantity++
      }
    },

    decrementQuantity(){
      if(this.quantity > 0){
        this.quantity--
      }
    }


  },
  computed: {
    filteredItem: function(){
      const result = this.items.filter(item => {
        if(this.id == item.id) return item;
      })
      return result[0];
    },
    categories: function(){
      return this.filteredItem.category
    }

  }
  
};
</script>

<style>

.img-style-1{
  width: 450px;
  height: 450px;
}
  .item-card-info{
    margin: 10px auto;  
    padding: 10px;
    max-width: 1000px;
    border-radius: 8px;
    color: white;
    background-color:rgb(93, 82, 245);
  } 
  
  li{
    list-style: none;
  }

  li a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}


ul li{
  padding: 5px;
}

.category-style{
  padding: 10px;
  margin: auto 5px;
  color:rgb(255, 255, 255);
  background-color: #2a942a;
  border-radius: 8px;
}
.item-title{
  justify-content: left;
  padding: 10px;
  font-weight: bold;
}

</style>
