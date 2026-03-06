<script setup>
import { ref, provide, onMounted, watch } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  isDark.value = saved === 'dark'
})

watch(isDark, (val) => {
  localStorage.setItem('theme', val ? 'dark' : 'light')
})

const toggleTheme = () => {
  isDark.value = !isDark.value
}

provide('isDark', isDark)
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div :class="['app-wrapper', { 'dark-mode': isDark }]">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
:root {
  --primary: #0FA3A3;
  --primary-hover: #0d8e8e;
  --dark-blue: #1B1F2E;
  --gray: #2E2E2E;
  --light-gray: #F5F5F5;
  --white: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  color: var(--gray);
  transition: background-color 0.4s ease, color 0.4s ease;
}

.app-wrapper.dark-mode {
  background-color: var(--dark-blue);
  color: #e0e0e0;
}

.main-content {
  flex: 1;
}

/* Dark mode card styles */
.dark-mode .card {
  background-color: #232839 !important;
  border-color: #3a3f55 !important;
  color: #e0e0e0 !important;
}

.dark-mode .card .card-title,
.dark-mode .card .card-text,
.dark-mode .card h5,
.dark-mode .card p {
  color: #e0e0e0 !important;
}

.dark-mode .bg-light {
  background-color: #1e2235 !important;
}

.dark-mode .text-muted {
  color: #a0a4b8 !important;
}

.dark-mode .bg-white {
  background-color: #232839 !important;
}

.dark-mode .text-dark {
  color: #e0e0e0 !important;
}

.dark-mode .border {
  border-color: #3a3f55 !important;
}

.dark-mode input,
.dark-mode textarea,
.dark-mode select {
  background-color: #2a2f44 !important;
  border-color: #3a3f55 !important;
  color: #e0e0e0 !important;
}

.dark-mode input::placeholder,
.dark-mode textarea::placeholder {
  color: #888ca0 !important;
}

.dark-mode .form-check-label {
  color: #e0e0e0 !important;
}

/* Section styling */
.section-title {
  color: var(--primary);
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: var(--primary);
  margin-top: 8px;
}

/* Button styles */
.btn-primary-custom {
  background-color: var(--primary);
  border-color: var(--primary);
  color: var(--white);
  padding: 10px 28px;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary-custom:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
  color: var(--white);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(15, 163, 163, 0.3);
}

/* Badge styles */
.badge-termine {
  background-color: #dc3545;
  color: white;
}

.badge-en-cours {
  background-color: #ffc107;
  color: #333;
}

.badge-a-venir {
  background-color: var(--primary);
  color: white;
}

/* Section padding */
.section-padding {
  padding: 80px 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}
</style>
