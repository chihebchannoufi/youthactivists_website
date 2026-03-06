<script setup>
import { inject } from 'vue'

const isDark = inject('isDark')
</script>

<template>
  <!-- Page Header -->
  <section class="page-header text-center text-white py-5">
    <div class="container">
      <h1 class="display-5 fw-bold">Contactez-nous</h1>
      <p class="lead mb-0">N'hésitez pas à nous contacter pour toute question ou information</p>
    </div>
  </section>

  <!-- Contact Content -->
  <section class="section-padding">
    <div class="container">
      <div class="row g-5">
        <!-- Contact Info -->
        <div class="col-lg-5">
          <h2 class="section-title">Nos Coordonnées</h2>
          <p class="text-muted mt-3 mb-4">
            Nous sommes disponibles pour répondre à vos questions et vous accueillir.
          </p>

          <div class="contact-info">
            <div class="contact-item d-flex align-items-start mb-4">
              <div class="contact-icon me-3">
                <span class="mdi mdi-phone"></span>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Téléphone</h6>
                <p class="text-muted mb-1">+216 93 102 455</p>
              </div>
            </div>

            <div class="contact-item d-flex align-items-start mb-4">
              <div class="contact-icon me-3">
                <span class="mdi mdi-email"></span>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Email</h6>
                <p class="text-muted mb-0">mustiyouthactivists@gmail.com</p>
              </div>
            </div>

            <div class="contact-item d-flex align-items-start mb-4">
              <div class="contact-icon me-3">
                <span class="mdi mdi-map-marker"></span>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Adresse</h6>
                <p class="text-muted mb-0">Cité la mosquée, Le Krib, Tunisia, 6120</p>
              </div>
            </div>

            <div class="contact-item d-flex align-items-start mb-4">
              <div class="contact-icon me-3">
                <span class="mdi mdi-clock"></span>
              </div>
              <div>
                <h6 class="fw-bold mb-1">Horaires</h6>
                <p class="text-muted mb-0">Dimanche - Vendredi : 9h00 - 17h00</p>
              </div>
            </div>
          </div>

          <!-- Social Icons -->
          <div class="mt-4">
            <h6 class="fw-bold mb-3">Suivez-nous</h6>
            <div class="d-flex gap-3">
              <a href="#" class="social-btn"><span class="mdi mdi-facebook"></span></a>
              <a href="#" class="social-btn"><span class="mdi mdi-instagram"></span></a>
              <a href="#" class="social-btn"><span class="mdi mdi-twitter"></span></a>
              <a href="#" class="social-btn"><span class="mdi mdi-youtube"></span></a>
              <a href="#" class="social-btn"><span class="mdi mdi-linkedin"></span></a>
            </div>
          </div>
        </div>

        <!-- Google Map -->
        <div class="col-lg-7">
          <h2 class="section-title">Notre Localisation</h2>
          <div class="map-container mt-4 rounded-4 overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.2941176985523!2d9.134101475726606!3d36.329420994096004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb7f9090f2b6bd%3A0x2262e65525f20ce0!2sYouth%20Activists%20Organisation!5e0!3m2!1sfr!2stn!4v1772725545027!5m2!1sfr!2stn"
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
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

.contact-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(15, 163, 163, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon .mdi {
  font-size: 1.5rem;
  color: var(--primary);
}

.social-btn {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background-color: var(--primary-hover);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(15, 163, 163, 0.3);
}

.map-container {
  border: 3px solid rgba(15, 163, 163, 0.2);
}
</style>
