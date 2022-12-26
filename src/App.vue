<template lang="pug">
v-app
  //- color 可變更顏色主題 vue2官網->style~~->colors
  v-app-bar(color="light-blue darken-4")
    //- 導覽列標題
    V-app-bar-title TOMATO
    v-spacer
    //- 回首頁
    v-btn(icon="mdi-home" variant="text" to="/")
    //- 清單
    v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
    //- 設定
    v-btn(icon="mdi-cog" variant="text" to="/settings")
    v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  v-main
    v-container
      router-view(v-slot="{ Component }")
        //- 保留換頁時元件不會被銷毀
        //- 設定 inlcudes 指定要保留的元件
        keep-alive
          //- 動態元件，用 is 將元件傳入
          component(:is="Component")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
</script>
