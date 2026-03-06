<script setup>
import { ref, inject } from 'vue'
import ActivityCard from '../components/ActivityCard.vue'
import activitiesData from '../Data/activities.json'

const isDark = inject('isDark')
const activities = ref(activitiesData)
</script>

<template>
  <!-- Page Header -->
  <section class="page-header text-center text-white py-5">
    <div class="container">
      <h1 class="display-5 fw-bold">Nos Activités</h1>
      <p class="lead mb-0">Découvrez toutes nos activités passées, en cours et à venir</p>
    </div>
  </section>

  <!-- Activities List -->
  <section class="section-padding">
    <div class="container">
      <div v-if="activities.length === 0" class="text-center py-5">
        <span class="mdi mdi-calendar-blank" style="font-size: 4rem; color: #ccc;"></span>
        <p class="text-muted fs-5 mt-3">Aucune activité disponible pour le moment.</p>
      </div>

      <div v-else class="row g-4">
        <div v-for="activity in activities" :key="activity.id" class="col-lg-4 col-md-6">
          <ActivityCard :activity="activity" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--dark-blue) 0%, #0d8e8e 100%);
  padding: 80px 0;
}
</style>
