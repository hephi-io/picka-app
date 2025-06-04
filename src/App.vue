<script setup>
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { onMounted } from 'vue'


const authStore = useAuthStore()
onMounted(() => {
  authStore.authenticateUser()
})
</script>

<template>
  <RouterView></RouterView>
</template>

<style scoped></style>
