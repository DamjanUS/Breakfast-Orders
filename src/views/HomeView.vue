<template>
  <div class="home">
    <div class="flex gap-3">
      <galery :posters="posters" @order="onOrder($event)"></galery>
      <div class="w-1/4">
        <checkout :orders="orders"></checkout>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/Counter.vue'
import ModelTest from '@/components/ModelTest.vue'
import Checkout from '@/components/Checkout.vue'
import Galery from '@/components/Gallery.vue'

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
      ],
      orders: [
        {
          id: 1,
          count: 0
        },
        {
          id: 2,
          count: 0
        },
        {
          id: 3,
          count: 0
        }
      ]
    }
  },
  methods: {
    onOrder(order) {
      console.warn("hi from homeView agency with id", order.posterId)
    }
  },
  components: {
    Counter,
    ModelTest,
    Checkout,
    Galery    
  }
}
</script>
