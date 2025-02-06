<script lang="ts" setup>

import {ButtonProps, ButtonEmits} from "@/components/base/button/types/button.type.ts";

const props = defineProps<ButtonProps>()
const emit = defineEmits<ButtonEmits>()

const onClick = () => {
  emit('submit')
}


</script>
<template>
  <div class="button-container" @click="onClick">
    <button :class="props.class" :disabled="props.className">
      <slot name="content"/>
    </button>
  </div>
</template>

<style src="./button.style.scss" scoped/>