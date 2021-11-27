
<template>
  <div v-if="item.quantity != 0">
    <div class="my-card text-left">
      <img class="card-img-to img-style" :src="item.img" alt="" />
      <div class="card-body">
        <h4 class="card-title n-text">{{ item.name }}</h4>
        <p class="card-text n-text">Price: 
        <strong class="n-text">{{ item.price }}</strong></p>
        <button class="btn btn-danger" @click="RemoveItem(item)">Remove Item</button><router-link style="text-decoration: none; color: inherit" :to="{ name: 'ItemPage', params: { id: item.id } }"><div class="btn btn-success">Details</div></router-link>
      </div>
    </div>
  </div>

</template> 

<script>
export default {
  name: "ShopItemCard",
  props: ["item"],
  methods: {
    RemoveItem(item) {
      this.$store.commit("DELETE_ITEM", { item });
    },
    onChange(text) {
      this.coupon = text;
    },
  },
};
</script>

<style>
.img-style {
  width: 250px;
  height: 250px;
}

.n-text{
  color: rgb(64, 0, 138);
  font-size: 24px;
}

.my-card {
    position: relative;
    display: flex;
    flex-direction: row !important;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 0.70rem !important;
    color: hsl(0, 0%, 100%) !important;
    padding: 10px !important;
    margin: 10px !important;
    /* flex-grow: 100 !important; */
}


</style>
