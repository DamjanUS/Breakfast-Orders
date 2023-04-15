<template>
  <div class="home">
    <div class="flex gap-3">
      <gallery :posters="filteredPosters" @order="onOrder($event)"></gallery>
      <div class="w-1/4">
        <v-select
          v-model="selectedCountries"
          :options="allCountries"
          :reduce="opt => opt.id"
          multiple
          placeholder="Filter by country"
        >
        </v-select>
        <div class="py-2"></div>
        <checkout :orders="checkoutSummmary" @clear="clearOrders()"></checkout>
      </div>
    </div>
  </div>
</template>

<script>
import lodash from "lodash"

import Counter from '@/components/Counter.vue'
import ModelTest from '@/components/ModelTest.vue'
import Checkout from '@/components/Checkout.vue'
import Gallery from '@/components/Gallery.vue'

export default {
  data() {
    return {
      selectedCountries: [],
      posters: [
        {
          id: 1,
          img: "https://images.pexels.com/photos/16085452/pexels-photo-16085452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "lepotica1",
          country: 'us',
          available: true
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/6307706/pexels-photo-6307706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "lepotica2",
          country: 'cb',
          available: true
        },
        {
          id: 3,
          img:"https://images.pexels.com/photos/15764525/pexels-photo-15764525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ß",
          caption: "lepotica3",
          country: 'mk',
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
  computed: {
    filteredPosters() {
      const isFilterActive = this.selectedCountries.length > 0
      if (!isFilterActive) return this.posters

      const filtered = this.posters.filter((poster) => {
        const isIncluded = this.selectedCountries.includes(poster.country)
        return isIncluded
      })
      return filtered
    },
    checkoutSummmary() {
      const allOrders = this.orders.map((order) => {
        const foundPoster = this.posters.find((poster) => {
          return poster.id === order.id
        })
        order.caption = foundPoster.caption
        return order
      })
      return allOrders.filter((order) => {
        return order.count > 0
      })
    },
    allCountries() {
      const countries = this.posters.map((poster) => {
        return {
          id: poster.country,
          label: 'Country of ' + poster.country.toUpperCase()
        }
      })
      return lodash.uniq(countries)
    }
  },
  methods: {
    onOrder(newOrder) {
      const foundOrder = this.orders.find((order) => {
        return newOrder.posterId === order.id
      })
      foundOrder.count += newOrder.count
    },
    clearOrders() {
      this.orders = [
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
  components: {
    Counter,
    ModelTest,
    Checkout,
    Gallery    
  }
}
</script>
