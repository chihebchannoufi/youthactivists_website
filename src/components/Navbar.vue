<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const isDark = inject('isDark')

const closeMenu = () => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse?.classList.contains('show')) {
    navbarCollapse.classList.remove('show')
  }
}

</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm"
    :class="isDark ? 'navbar-dark bg-dark-nav' : 'navbar-light bg-white'">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center fw-bold" to="/">
        <img src="/images/logo.png" alt="Youth Activists Logo" class="navbar-logo me-2" /> <span
          class="brand-text">Youth Activists</span>
      </RouterLink>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center gap-1">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" active-class="active-link" @click="closeMenu" >
              <span class="mdi mdi-home me-1"></span>Accueil
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about" active-class="active-link" @click="closeMenu">
              <span class="mdi mdi-information me-1"></span>À propos
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/activities" active-class="active-link"  @click="closeMenu" >
              <span class="mdi mdi-calendar me-1"></span>Activités
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/projets" active-class="active-link" @click="closeMenu">
              <span class="mdi mdi-folder me-1"></span>Projets
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/join" active-class="active-link" @click="closeMenu">
              <span class="mdi mdi-account-plus me-1"></span>Adhésion
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact" active-class="active-link" @click="closeMenu">
              <span class="mdi mdi-email me-1"></span>Contact
            </RouterLink>
          </li>
          <li class="nav-item ms-2">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.bg-dark-nav {
  background-color: #161a2b !important;
}

.brand-text {
  color: var(--primary);
  font-size: 1.25rem;
}

.nav-link {
  font-weight: 500;
  padding: 8px 14px !important;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--primary) !important;
}

.active-link {
  color: var(--primary) !important;
  background-color: rgba(15, 163, 163, 0.1);
}

.navbar {
  z-index: 1030;
  transition: background-color 0.4s ease;
}
.navbar-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
</style>
