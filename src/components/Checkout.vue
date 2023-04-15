<template>
  <div class="border rounded">
    <div class="m-2 flex justify-end">
      <PButton @click="clear()" :disabled="orders.length === 0">Clear</PButton>
    </div>
    <table class="w-full">
      <tr>
        <th>Caption</th>
        <th>Count</th>
      </tr>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.caption }}</td>
        <td>{{ order.count }}</td>
      </tr>
      <tr v-if="orders.length === 0">
        <td colspan="2">Sorry no new orders</td>
      </tr>
    </table>
  </div>
</template>

<script>
import PButton from '@/components/PButton.vue'

export default {
  props: {
    orders: Array
  },
  methods: {
    clear() {
      this.$emit('clear')
    }
  },
  components: {
    PButton
  }
}
</script>