<script lang="ts" setup>
import FormHeader from "@/components/header/formHeader.vue";
import {reactive, ref} from "vue";
import BaseInput from "@/components/base/input/base-input.vue";
import BaseRadio from "@/components/base/radio/base-radio.vue";
import BaseTable from "@/components/base/table/base-table.vue";
import {EducationTableHeaders} from "@/constants/index.constant.ts";
import BaseDialog from "@/components/base/dialog/base-dialog.vue";
import BaseButton from "@/components/base/button/base-button.vue";
import BaseDatePicker from "@/components/base/date/base-date-picker.vue";
import type {RadioProps} from "@/components/base/radio/types/radio.type.ts";
import type {DialogForm} from "@/types/index.type.ts";


const form = reactive({
  name: "",
  father: "",
  nationalCode: "",
  birthDate: "",
  birthdayPlace: '',
  address: "",
  homePhone: "",
  mobilePhone: "",
  children: 0,
  activity: "",
  insuranceMonth: "",
  insuranceYear: ""
})

const dialogStatus = ref<boolean>(false)


const dialogForm = ref<DialogForm>({
  id: Math.random(),
  license: "",
  university: "",
  field: "",
  grade: "",
  start: "",
  end: ""
});


const editMode = ref<boolean>(false)
const editDialog = (item: DialogForm) => {
  dialogStatus.value = true
  Object.assign(dialogForm.value, item)
  editMode.value = true
}


const bodyStatus = ref<Array<RadioProps>>([
  {
    name: "body-status",
    id: "healthy-body",
    label: "سالم"
  },
  {
    name: "body-status",
    id: "unhealthy-body",
    label: "ناسالم"
  }
])


const mitralStatus = ref<Array<RadioProps>>([
  {
    name: "mitral-person",
    id: "single",
    label: "مجرد"
  },
  {
    name: "mitral-person",
    id: "married",
    label: "متاهل"
  }
])

const military = ref<Array<RadioProps>>([
  {
    name: "military-person",
    id: "free",
    label: "معاف"
  },
  {
    name: "military-person",
    id: "unFree",
    label: "مشمول"
  }
])

const resetForm = () => {
  dialogForm.value = {
    id: Math.random(),
    license: "",
    university: "",
    field: "",
    grade: "",
    start: "",
    end: ""
  }
  editMode.value = false
}

const educationRecord = ref<Array<DialogForm>>([])
const submitDialogForm = () => {
  if (!editMode.value) {
    educationRecord.value.push(dialogForm.value)
  } else {
    const index = educationRecord.value.findIndex((e: DialogForm) => e.id === dialogForm.value.id)
    if (index !== -1) {
      educationRecord.value[index] = {...dialogForm.value}
    }
  }

  dialogStatus.value = false
  resetForm()
}


const cancelForm = () => {
  dialogStatus.value = false
  resetForm()
}


const deleteRecord = (id: number) => {
  educationRecord.value = educationRecord.value.filter((item: any) => item.id != id)
}

</script>
<template>
  <div class="container">
    <form-header/>
    <div class="form-body">
      <div class="personal">
        <div class="title">
          <span>اطلاعات شخصی</span>
        </div>
        <div class="personal-info">
          <div class="name">
            <base-input v-model="form.name" placeholder="red" type="text" label="نام و نام خانوادگی:"/>
          </div>

          <div class="national-code">
            <base-input v-model="form.nationalCode" placeholder="red" type="text" label="کد ملی:"/>
          </div>
          <div class="birth-date">
            <base-date-picker format="jYYYY/jMM/jDD" v-model:date="form.birthDate">
              <template #prepend>
                <label>تاریخ تولد:</label>
              </template>
            </base-date-picker>
          </div>
          <div class="father">
            <base-input v-model="form.father" placeholder="red" type="text" label="نام پدر:"/>
          </div>


          <div class="birthday-place">
            <base-input v-model="form.birthdayPlace" placeholder="red" type="text" label="محل تولد:"/>
          </div>
          <div class="body-status">
            <span>وضعیت جسمانی:</span>
            <base-radio v-for="(item , index ) in bodyStatus" :id="item.id" :name="item.name" :key="index">
              <template #prepend>
                <label :for="item.id">{{ item.label }}</label>
              </template>
            </base-radio>
          </div>
        </div>
        <!--second-part-->
        <div class="second-part">
          <div class="mitral-status">
            <span>وضعیت تاهل:</span>
            <base-radio v-for="(item , index ) in mitralStatus" :id="item.id" :name="item.name" :key="index">
              <template #prepend>
                <label :for="item.id">{{ item.label }}</label>
              </template>
            </base-radio>
          </div>
          <div class="children">
            <base-input v-model="form.children" placeholder="red" type="text" label="تعداد فرزندان:"/>
          </div>
        </div>

        <div class="address">
          <div class="info">
            <div class="address">
              <base-input v-model="form.address" placeholder="red" type="text" label="آدرس محل سکونت:"/>
            </div>

            <div class="about-phone">
              <div class="home-phone">
                <base-input v-model="form.homePhone" placeholder="red" type="text" label="شماره تلفن ثابت:"/>
              </div>
              <div class="phone-number">
                <base-input v-model="form.mobilePhone" placeholder="red" type="text" label="شماره همراه:"/>
              </div>

            </div>

          </div>
        </div>

        <div class="military">
          <div class="status">
            <label>وضعیت نظام وظیفه:</label>
            <base-radio v-for="(item , index ) in military" :id="item.id" :name="item.name" :key="index">
              <template #prepend>
                <label :for="item.id">{{ item.label }}</label>
              </template>
            </base-radio>
          </div>
          <base-input v-model="form.activity" placeholder="red" type="text" label="ذکر و نوع فعالیت:"/>
        </div>
        <div class="insurance">
          <label>سابقه بیمه:</label>
          <div class="items">
            <base-input v-model="form.insuranceMonth" placeholder="red" type="text" label="ماه:"/>
            <base-input v-model="form.insuranceYear" placeholder="red" type="text" label="سال:"/>
          </div>
        </div>

      </div>
      <div class="educations-table">
        <base-table :columns="EducationTableHeaders" :rows="educationRecord">
          <template #row="{row}">
            <td>{{ row.license }}</td>
            <td>{{ row.field }}</td>
            <td>{{ row.university }}</td>
            <td>{{ row.grade }}</td>
            <td>{{ row.start }}</td>
            <td>{{ row.end }}</td>
            <td class="operation">
              <i class="pi pi-trash" @click="()=>deleteRecord(row.id)"/>
              <i class="pi pi-file-edit" @click="()=>editDialog(row)"/>
            </td>
          </template>
        </base-table>
        <div class="add-record" @click="dialogStatus = true">
          <i class="pi pi-plus"/>
        </div>
      </div>

      <base-dialog v-model:show="dialogStatus" class="education-dialog">
        <template #content>

          <div class="dialog-content">
            <div class="personal-info">
              <div class="name">
                <base-input v-model="dialogForm.license" placeholder="red" type="text" label="آخرین مدرک تحصیلی:"/>
              </div>
              <div class="national-code">
                <base-input v-model="dialogForm.field" placeholder="red" type="text" label="رشته تحصیلی:"/>
              </div>
              <div class="university">
                <base-input v-model="dialogForm.university" placeholder="red" type="text" label="دانشگاه:"/>
              </div>
              <div class="degree">
                <base-input v-model="dialogForm.grade" placeholder="red" type="text" label="معدل:"/>
              </div>
              <div class="start-date">
                <base-date-picker format="jYYYY/jMM/jDD" v-model:date="dialogForm.start">
                  <template #prepend>
                    <label>تاریخ شروع:</label>
                  </template>
                </base-date-picker>
              </div>
              <div class="end-date">
                <base-date-picker format="jYYYY/jMM/jDD" v-model:date="dialogForm.end">
                  <template #prepend>
                    <label>تاریخ پایان:</label>
                  </template>
                </base-date-picker>
              </div>
            </div>
          </div>
          <div class="button-section">
            <base-button class="submit-button" @submit="submitDialogForm">
              <template #content>
                <i class="pi pi-check"/>
                <label>ذخیره تغییرات</label>
              </template>
            </base-button>

            <base-button class="cancel-button" @click="cancelForm">
              <template #content>
                <label>لغو تغییرات</label>
              </template>
            </base-button>
          </div>
        </template>
      </base-dialog>
    </div>
  </div>

</template>

<style src="./home.style.scss"/>