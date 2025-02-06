<script lang="ts" setup>
import type {Poosition} from "./types/header.type.ts"
import {reactive} from "vue";
import BaseInput from "@/components/base/input/base-input.vue";
import DatePicker from 'vue3-persian-datetime-picker'


const positionInfo = reactive<Poosition>({
  job: "",
  date: ""
})

</script>
<template>
  <header>
    <div class="header-container">
      <div class="brand">
        <span>شرکت مهندسی محیاپرداز یزد ... </span>
        <span class="text-bold">پرسشنامه استخدام</span>
      </div>
      <div class="position">
        <div class="job">
          <base-input :model-value="positionInfo.text" placeholder="red" type="text"
                      label="موقعیت شغلی مورد نظر:"/>
        </div>
        <div class="date">
          <label>تاریخ:</label>
          <date-picker v-model="positionInfo.date" format="jYYYY/jMM/jDD" class="date-picker"  />
        </div>
      </div>
    </div>
  </header>
</template>

<style src="./header.style.scss"/>