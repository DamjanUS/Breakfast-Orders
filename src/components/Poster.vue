<template>
  <div class="poster">
    <img :src="poster.img">
    <br>
    <br>
    <span>caption: {{ poster.caption }}</span>
    <br>
    <counter v-if="poster.available"></counter>
    <div v-else>Sorry not available</div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  props: {
    poster: Object
  },
  data() {
    return {
    }
  },
  methods: {
    order() {
      console.warn("please order", this.poster.caption)
    },
    orderpls() {
      this.order()
    }
  },
  components: {
    Counter
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