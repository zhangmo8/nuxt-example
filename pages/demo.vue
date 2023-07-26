<script setup>

definePageMeta({
  validate: async(route) => {
    console.log('路由进入事件', route);
    return true;
  }

})


useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [{ children: 'console.log(\'Hello world\')' }]
})




</script>


<template>
  <h1>天王老子来了也不行~~</h1>
  <RouterView></RouterView>
</template>