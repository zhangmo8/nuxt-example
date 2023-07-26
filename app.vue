<script setup lang="ts">
useHead({
  titleTemplate: (page: any) => {
    console.log('page', page);
    return page ? `${page}` : 'Nuxt + Varlet';
  }
})



const route = useRoute();
const router = useRouter();
router.beforeEach = (to: any, from: any, next: any) => {
  const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  if (!isMobileDevice() && route.fullPath != '/deviceError') {
    navigateTo('/deviceError');
  }
  else if (isMobileDevice() && route.fullPath == '/deviceError') {
    navigateTo('/');
  }
}

</script>

<template>
  <RouterView />
</template>
