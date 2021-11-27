
<template>
    <div class="col-10 mt-3" v-if="item.quantity != 0">
      <div class="card h-100 text-left">
        <img class="card-img-top w-100 img-style" :src ="item.img" alt="">
        <div class="card-body">
          <h4 class="card-title">{{item.name}}</h4>
          <p class="card-text">Price: <strong>{{item.price}}</strong></p>

        <router-link style="text-decoration: none; color: inherit;" :to="{name: 'ItemPage', params:{id:item.id}}"><div class="link px-4 pb-3"> Details</div></router-link>
        
        </div>
      </div>
    </div>

</template> 

<script>
// import ItemCard from '.src/components/ItemCard.vue';

export default {
  name: 'ItemCard',
  props: ["item"]
};
</script>

<style>
.img-style{
  width: 250px;
  height:250px;
}

.item-card{
  border-radius: 8px ;
  background-color:rgb(70, 63, 175);
}

.link{
  background-color:rgb(93, 82, 245);
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
  cursor: pointer;
  color: rgb(255, 255, 255);
  text-decoration: none;
}


.link:hover{
  color: white;
  background-color:rgb(71, 62, 201);
}


</style>
