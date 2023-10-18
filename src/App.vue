<script setup lang="ts">
</script>

<template>
  <div class="bg-white min-h-screen">
    <unauthenticated-header></unauthenticated-header>
    <div>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
