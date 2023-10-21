<template>
  <div class="bg-white min-h-screen">
    <unauthenticated-header></unauthenticated-header>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { manageAuthToken } from '@/services/token';
import { getUser } from '@/services/webApi';

import { useStore } from 'vuex';
const store = useStore();
const loadUserData = async () => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    manageAuthToken(authToken);
    try {
      const userData = await getUser(authToken);
      store.commit('setUser', userData.user);
    } catch (error) {
      // Handle any errors here
    }
  }
};

onBeforeMount(loadUserData);
</script>

<style scoped>
</style>
