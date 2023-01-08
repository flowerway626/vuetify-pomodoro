<template lang="pug">
v-app(:theme="theme")
  v-main
    v-container
      .text-left
        h1(v-if="theme === 'light'" style="color: black") POMODORO
        h1(v-else style="color: #E0E0E0") POMODORO
      .text-right
        //- 回首頁
        v-btn(icon="mdi-home" variant="text" to="/")
        //- 清單
        v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
        v-btn(:icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="themeChange")
        //- 設定
        v-btn(icon="mdi-cog" variant="text" to="/settings")
        v-btn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
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
import { ref } from 'vue'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
const theme = ref('dark')

function themeChange () {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>
