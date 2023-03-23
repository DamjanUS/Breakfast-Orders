<template>
  <div class="poster">
    <img :src="poster.img"/>
    <span class="text-lg">caption: {{ poster.caption }}</span>

    <counter v-if="poster.available" @order="onOrder($event)"></counter>
    <div v-else class="italic text-stone-500">Sorry not sorry</div>

    <div v-if="poster.available && counter > 0">Today you have {{ counter }} orders</div> 
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
      counter: 0
    }
  },
  methods: {
    onOrder(count) {
      this.counter = this.counter + count
      this.$emit('order', count)
    }
  },
  components: {
    Counter
  }
}
</script>

<style lang="postcss" scoped>
.poster {
  @apply bg-red-300 border border-stone-300 rounded-xl p-2 flex flex-col gap-3;
}
</style>