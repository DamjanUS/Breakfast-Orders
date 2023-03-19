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
    <br>
    <div>Today you have {{ counter }} orders</div>
  </div>
</template>

<script>
import Pbutton from '@/components/PButton'

export default {
  data() {
    return {
      counter: 0,
      orderCounts: [1, 3, 5, 10]
    }
  },
  components: {
    Pbutton
  },
  methods: {
    increment(howMuch) {
      this.counter = this.counter + howMuch
    }
  }
}
</script>

<style lang="postcss">
.counter{
  @apply gap-2;
}
</style>