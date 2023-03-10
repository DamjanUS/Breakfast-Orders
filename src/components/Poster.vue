<template>
  <div class="poster">
    <img :src="link">
    <br>
    <br>
    <span>caption: {{ caption }}</span>
    <br>
    <Pbutton @click="order()">
      <span style='color: blue'>Order</span>
    </Pbutton>
    <Pbutton @click="orderpls()">
      <span style='color: red'>Order pls</span>
    </Pbutton>
  </div>
</template>

<script>
import Pbutton from '@/components/PButton'

export default {
  data() {
    return {
      link: "https://images.pexels.com/photos/11961823/pexels-photo-11961823.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
      caption: "Ubav dorucek"
    }
  },
  methods: {
    order() {
      console.warn("please order", this.caption)
    },
    orderpls() {
      this.order()
    }
  },
  components:{
    Pbutton
  }
}
</script>

<style scoped>
.poster {
  padding: 15px;
  margin: 10px;
}

div {
  background-color: #bebebe;
}
</style>