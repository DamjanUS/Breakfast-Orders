<template>
  <div class="grid grid-cols-3 gap-3 w-3/4">
    <poster
      v-for="poster in posters" :key="poster.id"
      :poster="poster" @order="onOrder($event, poster.id)"
    >
    </poster>
  </div>
</template>

<script>
import poster from '@/components/Poster.vue'

export default {
  props: {
    posters: Array
  },
  methods: {
    onOrder(count, posterId) {
      const order = {
        posterId: posterId,
        count: count
      }
      this.$emit('order', order)
    }
  },
  components:{
    poster
  }
}
</script>