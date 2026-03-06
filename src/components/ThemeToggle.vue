<script setup>
import { inject } from 'vue'

const isDark = inject('isDark')
const toggleTheme = inject('toggleTheme')
</script>

<template>
  <button class="btn theme-toggle-btn" @click="toggleTheme" :title="isDark ? 'Mode clair' : 'Mode sombre'">
    <span class="mdi" :class="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'" style="font-size: 1.3rem;"></span>
  </button>
</template>

<style scoped>
.theme-toggle-btn {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0;
}

.theme-toggle-btn:hover {
  background-color: var(--primary);
  color: white;
}
</style>
