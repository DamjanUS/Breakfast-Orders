<template>
  <button v-on="$listeners" class="ppbutton">
    <slot/>
  </button>
</template>

<style>
.ppbutton {
  padding: 10px 20px;
}
</style>