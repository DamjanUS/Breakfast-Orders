<template>
  <button v-on="$listeners" class="ppbutton border border-black rounded px-2 py-1">
    <slot/>
  </button>
</template>

<style>
.ppbutton {

}
</style>