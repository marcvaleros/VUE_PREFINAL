<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="d-flex align-content-stretch flex-wrap" >
      <div :key="item.id" v-for="item in items">
        <ItemCard :item="item"/>
      </div>
    </div>
    
  </div>
</template>

<script>

// import HelloWorld from "@/components/HelloWorld.vue";
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: "Menu",
  components: {
    ItemCard
  },
  data() {
    return {
       items: this.$store.state.items       
    }
  }
};
</script>

<style>
  body{
    background-color: rgb(93, 82, 245);
  }

</style>