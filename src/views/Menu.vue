<template >
  <div class="card-section">
      <div :key="item.id" v-for="item in items">
        <ItemCard :item="item" />
      </div>
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import ItemCard from "@/components/ItemCard.vue";

export default {
  name: "Menu",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: this.$store.state.items,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.card-section{
  position: relative;
  background-color: rgb(230, 229, 235);
  height: calc(100vh - 56px);
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap ;
  justify-content: center;
  align-items: center;
}



</style>