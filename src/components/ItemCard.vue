
<template>
    <div v-if="item.quantity != 0">
      <div class="card text-left">
        <img class="card-img-to img-style" :src ="item.img" alt="">
        <div class="card-body">
            <h4 class="card-title">{{item.name}}</h4>
            <p class="card-text">Price: $<strong>{{item.price}}.00</strong></p>
           <router-link style="text-decoration: none; color: inherit;" :to="{name: 'ItemPage', params:{id:item.id}}"><div class="btn btn-success"> Details</div></router-link>
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

.btn-success {
    color: #ffffff !important;
    background-color: #6200ff !important;
    border-color: #6200ff !important;
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff  !important;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
    box-shadow: 0 1px 1px rgba(0,0,0,0.15), 
              0 2px 2px rgba(0,0,0,0.10), 
              0 4px 4px rgba(0,0,0,0.10), 
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.10) !important;
}

.img-style{
  width: 500px;
  height:500px;
}

.link{
  background-color:rgb(93, 82, 245);
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
}


.link:hover{
  color: rgb(255, 255, 255);
  background-color:rgb(71, 62, 201);
}


</style>
