<template>
  <div class="w-full flex justify-center py-20 px-10">
    <div class="flex flex-col md:flex-row items-center gap-5">
      <div
        class="p-0.5 border rounded-full w-fit"
        :class="[isInputFocus ? 'border-t_primary_600' : 'border-white']"
      >
        <img
          src="./assets/image/cat.jpeg"
          class="w-20 h-20 rounded-full object-cover"
          alt="cat"
        />
      </div>
      <div class="flex flex-wrap items-end gap-1">
        <LabelInput
          name="input"
          label="SAMUEL IS"
          label-class="font-koulen font-medium"
          input-class="min-w-[72px] text-lg"
          auto-sized-class="text-lg"
          :auto-sized="true"
          :format-function="formatCurruncy"
          @on-focus="isInputFocus = true"
          @on-blur="isInputFocus = false"
        />
        <div class="ml-1 mb-1 text-lg t_dark_500">hours old</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { formatCurruncy } from './helpers/common'
import LabelInput from './components/base/form/LabelInput.vue'

const isInputFocus = ref(false)
</script>

<style></style>
