<template>
  
  <nav class="mynav navbar navbar-expand navbar-custom">
    <div class="container">
      <div class="nav navbar-nav logo">
        SHOPCART
      </div>
      <ul class="nav navbar-nav">
        <router-link class="nav-link nav-item active home" to="/">Home</router-link>
        <router-link class="nav-link nav-item shop" to="/Shop">Shop</router-link>
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
  font-weight: 300px;
  font-style: bold;
}
.shop{
  color:rgb(255, 255, 255);
}
.navbar-custom {
    background-color:  #5526ff;
}
.nav-link {
    display: block;
    padding: 0.5rem 1rem !important;
    color: #ffffff !important;
    text-decoration: none;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,white .15s ease-in-out;
}
</style>
