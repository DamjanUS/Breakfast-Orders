<template>
  <div>
    <div class="container">
      <Pbutton @click="increment(1)">+1 New order</Pbutton>
      <Pbutton @click="increment(3)">+3 New order</Pbutton>
      <Pbutton @click="increment(5)">+5 New order</Pbutton>
    </div>
    <br>
    <div>Today you have {{counter}} orders </div>
  </div>
</template>

<script>
import Pbutton from '@/components/PButton'

export default {
  data() {
    return {
      counter: 0
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