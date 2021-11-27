
<template>
    <div v-if="item.quantity != 0">
      <div class="my-card card text-left">
        <img class="card-img-to img-style" :src ="item.img" alt="">
        <div class="card-body">
            <h4 class="card-title">{{item.name}}</h4>
            <p class="card-text">Price: $<strong>{{item.price}}.00</strong></p>
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
body{
    background-color: rgb(21, 18, 58) !important;
}
.card {
    position: relative;
    display: flex;
    flex-direction: row !important;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.70rem !important;
    color: #4e1dff !important;
    padding: 10px !important;
    margin: 10px !important;
    flex-grow: 100 !important;
}

.img-style{
  width: 500px;
  height:500px;
}

.link{
  background-color:rgb(93, 82, 245);
  /* padding: 10px; */
  /* margin: 10px auto; */
  /* color: rgb(240, 122, 26); */
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
}


.link:hover{
  color: rgb(255, 255, 255);
  background-color:rgb(71, 62, 201);
}


</style>
