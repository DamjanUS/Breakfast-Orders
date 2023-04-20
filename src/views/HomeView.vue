<template>
  <div class="home">
    <div class="flex gap-3">
      <gallery :posters="filteredPosters" @order="onOrder($event)"></gallery>
      <div class="w-1/4">
        <div class="flex items-center gap-4">
          <PButton @click="show()">Forma</PButton>
          <div class="flex-1">
            <v-select
              v-model="selectedCountries"
              :options="allCountries"
              :reduce="opt => opt.id"
              multiple
              placeholder="Filter by country">
            </v-select>
          </div>
          <checkbox label="Available only" v-model="isAvaliable"></checkbox>
        </div>
        <div class="py-2"></div>
        <checkout :orders="checkoutSummmary" @clear="clearOrders()"></checkout>
      </div>
    </div>

    <modal name="Form-modal">
      <h1>Create new poster</h1><br>
      <form @submit.prevent="pushForm">
        <label for="link" >Image link:</label><br>
        <input type="text" id="link" name="link" class="border" v-model="newPoster.img"><br>
        <label for="name" >Caption:</label><br>
        <input type="text" id="name" name="name" class="border" v-model="newPoster.caption"><br>
        <label for="lname">Country:</label><br>
        <input type="text" id="lname" name="lname" class="border" v-model="newPoster.country"><br>
        <checkbox label="Available:" v-model="newPoster.available"></checkbox><br>
        <PButton type="submit">Submit</PButton>
      </form>
    </modal>
  </div>

</template>

<script>
import lodash from "lodash"

import Counter from '@/components/Counter.vue'
import ModelTest from '@/components/ModelTest.vue'
import Checkout from '@/components/Checkout.vue'
import Gallery from '@/components/Gallery.vue'
import Checkbox from '@/components/Checkbox.vue'
import PButton from '@/components/PButton.vue'

export default {
  data() {
    return {
      selectedCountries: [],
      isAvaliable: false,
      posters: [
        {
          id: 1,
          img: "https://images.pexels.com/photos/7324757/pexels-photo-7324757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "lepotici1",
          country: 'us',
          available: true
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg",
          caption: "lepotica2",
          country: 'cb',
          available: false
        },
        {
          id: 3,
          img:"https://images.pexels.com/photos/15764525/pexels-photo-15764525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1ß",
          caption: "lepotica3",
          country: 'mk',
          available: true
        }
      ],
      newPoster: {
        img: '',
        caption: '',
        country: '',
        available: false
      },
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
      const filtered = this.posters.filter((poster) => {
        const isCountryIncluded = this.selectedCountries.length === 0 || this.selectedCountries.includes(poster.country)
        const availability = this.isAvaliable === false || poster.available === this.isAvaliable
        return isCountryIncluded && availability
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
    },
    show() {
      this.$modal.show('Form-modal')
    },
    pushForm() {
      const newId = this.posters.length + 1
      this.newPoster.id = newId
      this.posters.push(this.newPoster)
     
      this.orders.push({
        id: newId,
        count: 0
      })
      this.$modal.hide('Form-modal')
    },  
  },
  components: {
    Counter,
    ModelTest,
    Checkout,
    Gallery,
    Checkbox,
    PButton    
  }
}
</script>
