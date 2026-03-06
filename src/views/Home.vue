<script setup>
import { ref, inject } from 'vue'
import { RouterLink } from 'vue-router'
import ActivityCard from '../components/ActivityCard.vue'
import FeedbackSection from '../components/FeedbackSection.vue'
import PartnersCarousel from '../components/PartnersCarousel.vue'
import activitiesData from '../Data/activities.json'

const isDark = inject('isDark')
const latestActivities = ref(activitiesData.slice(0, 3))
</script>

<template>
  <!-- Hero Section -->
  <section class="hero-section d-flex align-items-center justify-content-center text-center text-white">
    <div class="hero-overlay"></div>
    <div class="container position-relative" style="z-index: 2;">
      <div class="mb-4">
        <img src="/images/logo.png" alt="Youth Activists Logo" class="hero-logo" />
      </div>
      <h1 class="display-4 fw-bold mb-3">Youth Activists</h1>
      <p class="lead mb-4 mx-auto" style="max-width: 600px;">
        Ensemble pour un avenir meilleur. Engageons-nous pour le changement à travers l'action collective et le leadership jeune.
      </p>
      <div class="d-flex gap-3 justify-content-center flex-wrap">
        <RouterLink to="/join" class="btn btn-primary-custom btn-lg">
          <span class="mdi mdi-account-plus me-2"></span>Rejoignez-nous
        </RouterLink>
        <RouterLink to="/about" class="btn btn-outline-light btn-lg rounded-pill px-4">
          <span class="mdi mdi-information me-2"></span>En savoir plus
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Introduction Section -->
  <section class="section-padding">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h2 class="section-title">Qui sommes-nous ?</h2>
          <p class="mt-3 lh-lg">
            <strong>Youth Activists</strong> est une association de jeunes engagés qui croient au pouvoir du changement.
            Nous travaillons ensemble pour promouvoir la citoyenneté active, l'éducation, la solidarité et le
            développement durable dans nos communautés.
          </p>
          <p class="lh-lg">
            Notre mission est de créer un espace où les jeunes peuvent développer leurs compétences,
            partager leurs idées et contribuer activement à un monde meilleur.
          </p>
          <RouterLink to="/about" class="btn btn-primary-custom mt-3">
            Découvrir notre histoire <span class="mdi mdi-arrow-right ms-1"></span>
          </RouterLink>
        </div>
        <div class="col-lg-6">
          <div class="row g-3">
            <div class="col-6">
              <div class="stat-card text-center p-4 rounded-4 shadow-sm">
                <span class="mdi mdi-account-group stat-icon"></span>
                <h3 class="fw-bold mt-2" style="color: var(--primary);">150+</h3>
                <p class="text-muted mb-0">Membres actifs</p>
              </div>
            </div>
            <div class="col-6">
              <div class="stat-card text-center p-4 rounded-4 shadow-sm">
                <span class="mdi mdi-calendar-check stat-icon"></span>
                <h3 class="fw-bold mt-2" style="color: var(--primary);">50+</h3>
                <p class="text-muted mb-0">Activités réalisées</p>
              </div>
            </div>
            <div class="col-6">
              <div class="stat-card text-center p-4 rounded-4 shadow-sm">
                <span class="mdi mdi-folder-star stat-icon"></span>
                <h3 class="fw-bold mt-2" style="color: var(--primary);">20+</h3>
                <p class="text-muted mb-0">Projets réussis</p>
              </div>
            </div>
            <div class="col-6">
              <div class="stat-card text-center p-4 rounded-4 shadow-sm">
                <span class="mdi mdi-handshake stat-icon"></span>
                <h3 class="fw-bold mt-2" style="color: var(--primary);">10+</h3>
                <p class="text-muted mb-0">Partenaires</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Latest Activities -->
  <section class="section-padding bg-light">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title mx-auto">Nos Dernières Activités</h2>
        <p class="text-muted mt-3">Découvrez nos activités les plus récentes et rejoignez le mouvement.</p>
      </div>

      <div v-if="latestActivities.length === 0" class="text-center">
        <p class="text-muted fs-5">Aucune activité disponible pour le moment.</p>
      </div>

      <div v-else class="row g-4">
        <div v-for="activity in latestActivities" :key="activity.id" class="col-lg-4 col-md-6">
          <ActivityCard :activity="activity" />
        </div>
      </div>

      <div class="text-center mt-5">
        <RouterLink to="/activities" class="btn btn-primary-custom">
          Voir toutes les activités <span class="mdi mdi-arrow-right ms-1"></span>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Feedback Section -->
  <FeedbackSection />

  <!-- Partners Carousel -->
  <PartnersCarousel />
</template>

<style scoped>
.hero-section {
  min-height: 90vh;
  background: linear-gradient(135deg, var(--dark-blue) 0%, #0d8e8e 100%);
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><circle cx="40" cy="40" r="1" fill="rgba(255,255,255,0.05)"/></svg>') repeat;
  z-index: 1;
}

.hero-logo {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
}

.stat-card {
  background-color: white;
  transition: transform 0.3s ease, background-color 0.4s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
}

.stat-icon {
  font-size: 2.2rem;
  color: var(--primary);
}

.dark-mode .stat-card {
  background-color: #232839;
}
</style>
