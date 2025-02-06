<script lang="ts" setup>
import type {DialogEmits, DialogProps} from "@/components/base/dialog/types/dialog.type.ts";

const emit = defineEmits<DialogEmits>()
const props = defineProps<DialogProps>()

const isShow = defineModel('show', {
  default: false
})
const closeDialog = () => {
  emit('close')
  isShow.value = false
}

</script>

<template>
  <div class="dialog" v-show="isShow" :class="props.class">
    <div class="header">
      <slot name="header"/>
      <i class="pi pi-times close-btn" @click="closeDialog"/>
    </div>
    <div class="dialog-content">
      <slot name="content"/>
    </div>
  </div>
  <div class="backward" v-show="isShow"></div>
</template>
<style src="./dialog.style.scss"/>