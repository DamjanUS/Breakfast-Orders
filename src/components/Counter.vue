<template>
  <div>
    <div class="pcontainer counter">
      <Pbutton
        v-for="orderCount in orderCounts" :key="orderCount"
        @click="increment(orderCount)"
      >
        +{{ orderCount }} New order
      </Pbutton>
    </div>
  </div>
</template>

<script>
import Pbutton from '@/components/PButton'

export default {
  data() {
    return {
      orderCounts: [1, 3, 5, 10]
    }
  },
  methods: {
    increment(howMuch) {
      this.$emit('order', howMuch)
    }
  },
  components: {
    Pbutton
  }
}
</script>

<style lang="postcss">
.counter {
  @apply gap-2;
}
</style>