<template lang="pug">
v-row#list
  v-col.v-col-12.v-col-md-6
    v-col
      h1.text-center 待完成
    v-col
      v-table#items
        thead
          tr
            th 新增日期
            th 項目內容
            th 操作
        tbody
          tr(v-if="items.length === 0")
            td(colspan="3") NONE
          tr(v-for="item in items" :key="item.id")
            td {{ item.nowTime }}
            td
              //- autofocus 選到該欄時自動可以打字
              v-text-field(v-if="item.edit" v-model="item.model" variant="underlined" autofocus :rules="[rules.required, rules.length]")
              span(v-else) {{ item.name }}
            td
              //- 編輯模式
              span(v-if="item.edit")
                //- 打勾(編輯完成)
                v-btn(icon="mdi-check" variant="text" color="blue" @click="comfirmEditItem(item.id)")
                //- 叉叉(取消編輯)
                v-btn(icon="mdi-undo" variant="text" color="red" @click="undoEditItem(item.id)")
              //- 一般模式
              span(v-else)
                //- 鉛筆(編輯)
                v-btn(icon="mdi-pencil" variant="text" color="blue" @click="editItem(item.id)")
                //- 刪除
                v-btn(icon="mdi-delete" variant="text" color="red" @click="delItem(item.id)")
          tr(v-if="items.length > 0")
            td(colspan="3") 共 {{ items.length }} 項
    v-divider.mt-5.d-md-none
  v-col.v-col-12.v-col-md-6
    v-col
      h1.text-center 已完成
    v-col
      v-table#done
        thead
          tr
            th.w-75 項目內容
            th 操作
        tbody
          tr(v-if="finishedItems.length === 0")
            td(colspan="2") NONE
          tr(v-for="item in finishedItems" v-else :key="item.id")
            td {{ item.name }}
            td
              v-btn(icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)")
          tr(v-if="finishedItems.length > 0")
            td(colspan="2") 共 {{ finishedItems.length }} 項
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const list = useListStore()
const { editItem, comfirmEditItem, delItem, undoEditItem, delFinishedItem } =
  list
const { items, finishedItems } = storeToRefs(list)

// 必填驗證 function
// rules[] 驗證規則
const rules = {
  // v(value簡寫) 輸入欄位收到的值
  required (v) {
    // ! 轉布林值把值轉為 false，加 ! 會轉相反so!! (負負得正 => 兩個!!)
    return !!v || '欄位必填'
  },
  length (v) {
    return v.length >= 3 || '需輸入至少 3 個字元'
  }
}
</script>
