<template>
  <div class="border rounded">
    <table class="w-full">
      <tr>
        <th>Id</th>
        <th>Count</th>
      </tr>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.count }}</td>
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