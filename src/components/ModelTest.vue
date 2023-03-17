<template>  
  <div>
    <input :value="message" @input="messageChanged($event)" placeholder="edit me">
    <PButton @click="resetMessage()">Reset</PButton>
    <p><slot/>: {{ message }}</p>
  </div>
</template>

<script>
import PButton from '@/components/PButton'

export default {
  data() {
    return {
      message: ""
    }
  },
  methods: {
    messageChanged(message) {
      this.message = message.target.value
    },
    resetMessage() {
      this.message = ""
    }
  }, 
  components: {
    PButton
  }
}
</script>