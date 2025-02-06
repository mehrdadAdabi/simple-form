<script lang="ts" setup>

import type {TableProps} from "@/components/base/table/types/table.type.ts";

const props = withDefaults(defineProps<TableProps>(), {
  rows: [],
  columns: []
})


</script>
<template>
  <div class="custom-table">
    <table>
      <thead>
      <tr>
        <th
            v-for="header in props.columns"
            :key="header.key"
            :class="header.styles"
            class="header"
        >
          {{ header.label }}
        </th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(row, index) in props.rows" :key="index" class="row">
        <template v-if="$slots.row ">
          <slot name="row" :row="row" :index="index"/>
        </template>
      </tr>
      </tbody>
    </table>
    <template v-if="props.rows.length === 0">
      <p class="no-data">رکوردی برای نمایش یافت نشد.</p>
    </template>
  </div>
</template>

<style src="./table.style.scss" scoped/>