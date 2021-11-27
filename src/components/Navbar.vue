<template>
  
  <nav class="mynav navbar navbar-expand navbar-custom">
    <div class="container">
      <div class="nav navbar-nav logo">
        SHOPCART
      </div>
      <ul class="nav navbar-nav">
        <router-link class="nav-link nav-item active home" to="/">Home</router-link>
        <router-link class="nav-link nav-item shop" to="/Shop"><span v-if="ItemCount > 0">{{ItemCount}}</span> Shop </router-link>
      </ul> 

      </div>
  </nav>

</template>

<script>

export default {
  name: 'Navbar',
  computed: {
    ItemCount() {
      return this.$store.getters.countItems; 
    }
  },
};
</script>

<style>
.logo{
  color: #ffffff;
}
.shop{
  color:aliceblue;
}
.navbar-custom {
    background-color:  #080216;
}
</style>
