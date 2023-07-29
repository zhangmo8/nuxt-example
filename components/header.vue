<script setup>
import { ref } from 'vue'

const active = ref(0);

const themeIconName = ref('white-balance-sunny')

import { StyleProvider, Themes } from '@varlet/ui'

let currentTheme = null


const swichTheme = () => {
  console.log('111');
  themeIconName.value = themeIconName.value == 'weather-pouring' ? 'white-balance-sunny' : 'weather-pouring';
  currentTheme = currentTheme ? null : Themes.dark
  StyleProvider(currentTheme)
}


</script>

<template>
  <var-app-bar>
    <!-- 标题 -->
    <template #left>
      <var-button round text color="transparent" text-color="#fff">
        <var-icon name="menu" :size="28" />
      </var-button>
    </template>

    <template #right>
      <var-menu placement="bottom">
        <var-button round text color="transparent" text-color="#fff">
          <var-icon :transition="300" name="translate" :size="28" />
        </var-button>

        <template #menu>
          <var-cell>中文</var-cell>
          <var-cell>English</var-cell>
        </template>
      </var-menu>
      <var-button round text color="transparent" text-color="#fff" style="margin: 0 10px" @click="swichTheme">
        <var-icon :transition="300" :name="themeIconName" :size="28" />
      </var-button>
    </template>

    <template #content>
      <var-tabs style="margin-top: 30px" color="transparent" active-color="#fff" inactive-color="#ddd"
        v-model:active="active">
        <var-tab>本草纲目</var-tab>
        <var-tab>本草纲目</var-tab>
        <var-tab>本草纲目</var-tab>
      </var-tabs>
    </template>
  </var-app-bar>
</template>