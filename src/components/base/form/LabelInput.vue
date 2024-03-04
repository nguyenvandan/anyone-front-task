<template>
  <label>
    <span
      v-if="label.length > 0"
      class="w-fit mb-1 block"
      :class="[isFocus ? 'text-t_primary_600' : 'text-t_dark_500', labelClass]"
    >
      {{ label }}
    </span>
    <div class="w-min">
      <span
        v-if="autoSized"
        class="invisible whitespace-pre px-2 border-x h-0 block"
        :class="[autoSizedClass]"
        >{{ inputValue }}</span
      >
      <input
        type="text"
        :name="name"
        :aria-label="label"
        class="w-full max-w-full outline-none border rounded-md px-2 py-1"
        :class="[
          isFocus
            ? 'border-t_primary_400 text-t_dark_500'
            : 'border-t_gray_200 text-gray-400',
          inputClass,
        ]"
        v-model="inputValue"
        @input="handelChange($event)"
        @focus="emit('on-focus'), (isFocus = true)"
        @blur="emit('on-blur'), (isFocus = false)"
      />
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: false,
    default: '',
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
  labelClass: {
    type: String,
    required: false,
    default: '',
  },
  inputClass: {
    type: String,
    required: false,
    default: '',
  },
  autoSizedClass: {
    type: String,
    required: false,
    default: '',
  },
  autoSized: {
    type: Boolean,
    required: false,
    default: false,
  },
  formatFunction: {
    type: Function,
    required: false,
  },
})

const inputValue = ref(props.value)
const isFocus = ref(false)

const emit = defineEmits(['on-change', 'on-focus', 'on-blur'])

const handelChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = target.value ?? ''
  const formatValue = props.formatFunction ? props.formatFunction(value) : value
  inputValue.value = formatValue
  emit('on-change', formatValue)
}
</script>
