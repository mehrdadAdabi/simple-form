<script lang="ts" setup>
import type { BaseInputProps } from "./types/input.type";

const props = defineProps<BaseInputProps>();
const model = defineModel('modelValue', { type: String });
</script>
<template>
  <div class="input-container">
    <slot name="prepend"></slot>
    <label class="input-label" v-show="props.label">{{ props.label }}</label>
    <input :type="props.type" v-model="model"  class="custom-input" :class="props.class" />
    <slot name="append"></slot>
  </div>
</template>

<style src="./input.style.scss"/>