<template>
  <div>
    <input
      :id="generatedLabel"
      :value="value"
      type="checkbox"
      class="checkbox"
      :checked="value"
      @change="e => setValue(e.target.checked)"
      v-bind="$attrs"
    />
    <label :for="generatedLabel">
      {{ label }}
    </label>
  </div>
</template>

<script>
import nanoid from "nanoid";

export default {
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    generatedLabel() {
      return this.label ? this.generateCheckboxId(this.label) : nanoid();
    }
  },
  methods: {
    setValue(val) {
      this.$emit('input', val);
    },
    generateCheckboxId(label) {
      return label.replace(" ", "-");
    }
  },
};
</script>

<style scoped lang="postcss">
$green: #44a12b;

.checkbox {
  @apply absolute opacity-0;
  & + label {
    @apply relative cursor-pointer border-gray-500 font-medium text-xs;
  }
  & + label:before {
    @apply inline-block border border-solid border-gray-400 rounded-md;
    transform: translateY(5px);
    margin-right: 5px;
    content: "";
    width: 20px;
    height: 20px;
  }
  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }
  &:disabled + label {
    @apply border-green-400 cursor-auto;
  }
  &:disabled + label:before {
    @apply shadow-none;
  }
  &:checked + label:after {
    @apply absolute border-green-400;
    content: "";
    left: 5px;
    top: 7px;
    width: 2px;
    height: 2px;
    box-shadow: 2px 0 0 $green, 4px 0 0 $green, 4px -2px 0 $green,
      4px -4px 0 $green, 4px -6px 0 $green, 4px -8px 0 $green;
    transform: rotate(45deg);
  }
}
</style>
