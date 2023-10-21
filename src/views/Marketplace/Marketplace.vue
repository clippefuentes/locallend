<template>
  <div>
    <div v-if="user">
      Welcome, {{ user.user.username }}
    </div>
    <div v-else>
      Please log in.
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  },
  watch: {
    user: {
      handler(newUser) {
        console.log('User data:', JSON.parse(JSON.stringify(newUser)).user);
      },
      deep: true,
    },
  },
};
</script>
