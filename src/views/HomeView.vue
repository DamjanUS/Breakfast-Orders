<template>
  <div class="home">
    <ModelTest>
      <span>Message is</span>
    </ModelTest>
    <Counter></Counter>

    <div class="pcontainer gap-3">
      <poster
        v-for="poster in posters" :key="poster.id"
        :poster="poster"
      >
      </poster>
    </div>
  </div>
</template>

<script>
import Poster from '@/components/Poster.vue'
import Counter from '@/components/Counter.vue'
import ModelTest from '@/components/ModelTest.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      posters: [
        {
          id: 1,
          img: "https://images.pexels.com/photos/15764525/pexels-photo-15764525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "lepotica1",
          available: true
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/6307706/pexels-photo-6307706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "lepotica2",
          available: false
        },
        {
          id: 3,
          img:"https://images.pexels.com/photos/15764525/pexels-photo-15764525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ß",
          caption: "lepotica3",
          available: true
        }
      ]
    }
  },
  components: {
    Poster,
    Counter,
    ModelTest    
  }
}
</script>
