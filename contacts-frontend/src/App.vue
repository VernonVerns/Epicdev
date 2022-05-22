<script setup>
  import SuccessError from './components/modals/SuccessError.vue'
  import NavigationBar from './components/TopNav.vue'
</script>
<template>
  <NavigationBar />
  <router-view />
  <SuccessError />
</template>
