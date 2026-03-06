<script setup>
import partnersData from '../Data/partners.json'
import { ref } from 'vue'

const partners = ref(partnersData)
</script>

<template>
  <section class="section-padding bg-light">
    <div class="container text-center">
      <h2 class="section-title mx-auto">Nos Partenaires</h2>

      <div v-if="partners.length === 0" class="mt-5">
        <p class="text-muted fs-5">Aucune donnée disponible pour le moment.</p>
      </div>

      <div v-else class="mt-5">
        <div id="partnersCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div class="carousel-inner">
            <div
              v-for="(partner, index) in partners"
              :key="partner.id"
              class="carousel-item"
              :class="{ active: index === 0 }"
            >
              <div class="d-flex justify-content-center align-items-center py-4">
                <a :href="partner.url" class="partner-link">
                  <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
                  <p class="mt-3 fw-semibold" style="color: var(--primary);">{{ partner.name }}</p>
                </a>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#partnersCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
            <span class="visually-hidden">Précédent</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#partnersCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
            <span class="visually-hidden">Suivant</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partner-logo {
  max-height: 100px;
  max-width: 200px;
  object-fit: contain;
  filter: grayscale(30%);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.partner-link:hover .partner-logo {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.partner-link {
  text-decoration: none;
}
</style>
