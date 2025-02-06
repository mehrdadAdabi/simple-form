<script lang="ts" setup>
import DatePicker from 'vue3-persian-datetime-picker'
import type {DatePickerProps, Emits} from "@/components/base/date/types/date-picker.type.ts";

const props = defineProps<DatePickerProps>()
// const emit = defineEmits<Emits>()
const model = defineModel('date', {
  default: ''
})



</script>

<template>
  <div class="date-picker-container">
    <slot name="prepend"/>
    <date-picker :format="props.format" v-model="model" class="date-picker" :class="props.class"/>
    <slot name="append"/>
  </div>
</template>

<style src="./base-date-picker.scss" scoped/>