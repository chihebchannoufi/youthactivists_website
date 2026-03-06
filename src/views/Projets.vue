<script setup>
import { ref, computed, inject } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projetsData from '../Data/projets.json'

const isDark = inject('isDark')
const projets = ref(projetsData)

const projetsEnCours = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return projets.value.filter(p => {
    const start = new Date(p.startDate)
    const end = new Date(p.endDate)
    return (start <= today && today <= end) || start > today
  })
})

const projetsTermines = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return projets.value.filter(p => {
    const end = new Date(p.endDate)
    return end < today
  })
})
</script>

<template>
  <!-- Page Header -->
  <section class="page-header text-center text-white py-5">
    <div class="container">
      <h1 class="display-5 fw-bold">Nos Projets</h1>
      <p class="lead mb-0">Nos projets en cours et réalisés pour le développement communautaire</p>
    </div>
  </section>

  <!-- Projects Content -->
  <section class="section-padding">
    <div class="container">
      <div v-if="projets.length === 0" class="text-center py-5">
        <span class="mdi mdi-folder-open" style="font-size: 4rem; color: #ccc;"></span>
        <p class="text-muted fs-5 mt-3">Aucun projet disponible pour le moment.</p>
      </div>

      <template v-else>
        <!-- Projets en cours / à venir -->
        <div v-if="projetsEnCours.length > 0" class="mb-5">
          <h2 class="section-title">
            <span class="mdi mdi-progress-clock me-2"></span>Projets en cours
          </h2>
          <div class="row g-4 mt-3">
            <div v-for="project in projetsEnCours" :key="project.id" class="col-lg-4 col-md-6">
              <ProjectCard :project="project" />
            </div>
          </div>
        </div>

        <!-- Projets terminés -->
        <div v-if="projetsTermines.length > 0">
          <h2 class="section-title">
            <span class="mdi mdi-check-circle me-2"></span>Projets terminés
          </h2>
          <div class="row g-4 mt-3">
            <div v-for="project in projetsTermines" :key="project.id" class="col-lg-4 col-md-6">
              <ProjectCard :project="project" />
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--dark-blue) 0%, #0d8e8e 100%);
  padding: 80px 0;
}
</style>
