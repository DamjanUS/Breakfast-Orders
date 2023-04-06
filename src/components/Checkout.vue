<template>
  <div class="border rounded">
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
export default {
  props: {
    orders: Array
  }
}
</script>