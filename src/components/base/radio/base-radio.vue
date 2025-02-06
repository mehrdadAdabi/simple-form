<script lang="ts" setup>
import type {RadioEmit, RadioProps} from "@/components/base/radio/types/radio.type.ts";

const props = defineProps<RadioProps>()
const emit = defineEmits<RadioEmit>()
const model = defineModel('value', {
  default: false
})

const onChange = () => {
  emit('change')
}

</script>

<template>
  <div class="radio-container">

    <slot name="prepend" class="prepend"/>
    <input :class="props.class" type="radio" :id="props.id" :name="props.name" :value="model" @change="onChange"/>
    <slot name="append"/>

  </div>
</template>

<style src="./radio.style.scss"/>