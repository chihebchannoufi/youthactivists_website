<script setup>
import { ref, inject } from 'vue'

const isDark = inject('isDark')

const form = ref({
  fullName: '',
  birthDate: '',
  birthPlace: '',
  residence: '',
  gender: '',
  email: '',
  phone: '',
  motivation: '',
  skills: '',
  experience: '',
  confirm: false
})

const handleSubmit = () => {
  alert("Le formulaire d'adhésion n'est pas ouvert actuellement.\nVeuillez nous contacter par email ou téléphone.")
}
</script>

<template>
  <!-- Page Header -->
  <section class="page-header text-center text-white py-5">
    <div class="container">
      <h1 class="display-5 fw-bold">Rejoignez-nous</h1>
      <p class="lead mb-0">Devenez membre de Youth Activists et contribuez au changement</p>
    </div>
  </section>

  <!-- Join Form -->
  <section class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card border-0 shadow-sm rounded-4 p-4">
            <div class="card-body">
              <h3 class="fw-bold mb-2" style="color: var(--primary);">
                <span class="mdi mdi-account-plus me-2"></span>Formulaire d'adhésion
              </h3>
              <p class="text-muted mb-4">Remplissez le formulaire ci-dessous pour soumettre votre demande d'adhésion.</p>

              <form @submit.prevent="handleSubmit">
                <div class="row g-3">
                  <!-- Nom complet -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-account me-1"></span>Nom complet
                    </label>
                    <input type="text" class="form-control" v-model="form.fullName" placeholder="Votre nom complet" required />
                  </div>

                  <!-- Date de naissance -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-calendar me-1"></span>Date de naissance
                    </label>
                    <input type="date" class="form-control" v-model="form.birthDate" required />
                  </div>

                  <!-- Lieu de naissance -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-map-marker me-1"></span>Lieu de naissance
                    </label>
                    <input type="text" class="form-control" v-model="form.birthPlace" placeholder="Lieu de naissance" required />
                  </div>

                  <!-- Lieu de résidence -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-home me-1"></span>Lieu de résidence
                    </label>
                    <input type="text" class="form-control" v-model="form.residence" placeholder="Lieu de résidence actuel" required />
                  </div>

                  <!-- Genre -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-gender-male-female me-1"></span>Genre
                    </label>
                    <select class="form-select" v-model="form.gender" required>
                      <option value="" disabled>Sélectionnez votre genre</option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                    </select>
                  </div>

                  <!-- Email -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-email me-1"></span>Email
                    </label>
                    <input type="email" class="form-control" v-model="form.email" placeholder="votre@email.com" required />
                  </div>

                  <!-- Téléphone -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-phone me-1"></span>Téléphone
                    </label>
                    <input type="tel" class="form-control" v-model="form.phone" placeholder="+213 5XX XXX XXX" required />
                  </div>

                  <!-- Motivation -->
                  <div class="col-12">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-heart me-1"></span>Motivation
                    </label>
                    <textarea class="form-control" v-model="form.motivation" rows="3" placeholder="Pourquoi souhaitez-vous rejoindre Youth Activists ?" required></textarea>
                  </div>

                  <!-- Compétences -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-star me-1"></span>Compétences
                    </label>
                    <textarea class="form-control" v-model="form.skills" rows="3" placeholder="Listez vos compétences principales"></textarea>
                  </div>

                  <!-- Expérience -->
                  <div class="col-md-6">
                    <label class="form-label fw-semibold">
                      <span class="mdi mdi-briefcase me-1"></span>Expérience
                    </label>
                    <textarea class="form-control" v-model="form.experience" rows="3" placeholder="Votre expérience associative ou professionnelle"></textarea>
                  </div>

                  <!-- Confirmation -->
                  <div class="col-12">
                    <div class="form-check mt-3">
                      <input class="form-check-input" type="checkbox" v-model="form.confirm" id="confirmCheck" required />
                      <label class="form-check-label" for="confirmCheck">
                        Je confirme que les informations fournies sont exactes et je souhaite rejoindre Youth Activists.
                      </label>
                    </div>
                  </div>

                  <!-- Submit -->
                  <div class="col-12 mt-4">
                    <button type="submit" class="btn btn-primary-custom btn-lg w-100">
                      <span class="mdi mdi-send me-2"></span>Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
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

.form-control,
.form-select {
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 0.2rem rgba(15, 163, 163, 0.15);
}

.form-check-input:checked {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>
