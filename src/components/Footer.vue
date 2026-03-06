<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const isDark = inject('isDark')
</script>

<template>
  <footer class="footer-section py-5" :class="isDark ? 'bg-dark-footer' : ''">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-title mb-3">
            <span class="mdi mdi-account-group me-2"></span>Youth Activists
          </h5>
          <p class="footer-text">
            Une association dédiée à l'autonomisation des jeunes et au développement communautaire à travers l'action collective et l'engagement citoyen.
          </p>
          <div class="social-links mt-3">
            <a href="https://www.facebook.com/YouthActivistsOrganisation" class="social-icon me-3"><span class="mdi mdi-facebook"></span></a>
            <a href="https://www.instagram.com/youth_activist/" class="social-icon me-3"><span class="mdi mdi-instagram"></span></a>
            <a href="#" class="social-icon me-3"><span class="mdi mdi-twitter"></span></a>
            <a href="#" class="social-icon me-3"><span class="mdi mdi-youtube"></span></a>
            <a href="#" class="social-icon"><span class="mdi mdi-linkedin"></span></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <h5 class="footer-title mb-3">Liens rapides</h5>
          <ul class="list-unstyled footer-links">
            <li><RouterLink to="/">Accueil</RouterLink></li>
            <li><RouterLink to="/about">À propos</RouterLink></li>
            <li><RouterLink to="/activities">Activités</RouterLink></li>
            <li><RouterLink to="/projets">Projets</RouterLink></li>
            <li><RouterLink to="/join">Adhésion</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-5 col-md-12">
          <h5 class="footer-title mb-3">Contact</h5>
          <ul class="list-unstyled footer-contact">
            <li class="mb-2">
              <span class="mdi mdi-map-marker me-2"></span>Cité la mosquée, Le Krib, Tunisia, 6120
            </li>
            <li class="mb-2">
              <span class="mdi mdi-phone me-2"></span>+216 93 102 455
            </li>
            <li class="mb-2">
              <span class="mdi mdi-email me-2"></span>mustiyouthactivists@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <hr class="my-4" :class="isDark ? 'border-secondary' : ''" />

      <div class="text-center">
        <p class="mb-0 small">
          &copy; {{ new Date().getFullYear() }} Youth Activists. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background-color: var(--dark-blue);
  color: #c0c4d8;
}

.bg-dark-footer {
  background-color: #0f1220 !important;
}

.footer-title {
  color: var(--primary);
  font-weight: 600;
}

.footer-text {
  color: #a0a4b8;
  line-height: 1.8;
}

.social-icon {
  color: #a0a4b8;
  font-size: 1.4rem;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--primary);
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #a0a4b8;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
  padding-left: 5px;
}

.footer-contact li {
  color: #a0a4b8;
}

.footer-contact .mdi {
  color: var(--primary);
}
</style>
