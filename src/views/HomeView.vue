<template>
  <div class="home">
    <Counter></Counter>

    <div class="container">
      <poster/>
      <poster/>
      <poster/>
    </div>

  </div>
</template>

<script>
import Poster from '@/components/Poster.vue'
import Counter from '@/components/Counter.vue'

export default {
  name: 'HomeView',
  components: {
    Poster,
    Counter    
  }
}
</script>
