<script setup>
import { inject } from 'vue'

const isDark = inject('isDark')
</script>

<template>
  <!-- Page Header -->
  <section class="page-header text-center text-white py-5">
    <div class="container">
      <h1 class="display-5 fw-bold">À propos de nous</h1>
      <p class="lead mb-0">Découvrez notre histoire, notre mission et notre vision</p>
    </div>
  </section>

  <!-- Notre Histoire -->
  <section class="section-padding">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <h2 class="section-title">Notre Histoire</h2>
          <p class="lh-lg mt-3">
            <strong>Youth Activists</strong> est née de la volonté de jeunes engagés qui croient en la force de l'action
            collective. Fondée par un groupe de jeunes passionnés, notre association s'est donnée pour mission de
            mobiliser la jeunesse autour de causes qui comptent.
          </p>
          <p class="lh-lg">
            Depuis notre création, nous avons organisé de nombreuses activités, lancé des projets impactants et
            rassemblé une communauté de jeunes déterminés à faire la différence dans leur environnement.
          </p>
          <p class="lh-lg">
            Nous croyons fermement que chaque jeune a le potentiel de devenir un acteur de changement. C'est
            pourquoi nous offrons des opportunités de formation, de développement personnel et d'engagement
            citoyen.
          </p>
        </div>
        <div class="col-lg-6 text-center">
          <img
            src="/images/Youth-Activists.png"
            alt="Notre équipe"
            class="img-fluid rounded-4 shadow"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- Mission et Vision -->
  <section class="section-padding bg-light">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-4">
            <div class="card-body">
              <div class="mb-3">
                <span class="mdi mdi-bullseye-arrow" style="font-size: 2.5rem; color: var(--primary);"></span>
              </div>
              <h3 class="fw-bold mb-3" style="color: var(--primary);">Notre Mission</h3>
              <ul class="list-unstyled lh-lg">
                <li class="mb-2"><span class="mdi mdi-check-circle me-2" style="color: var(--primary);"></span>Promouvoir la citoyenneté active chez les jeunes</li>
                <li class="mb-2"><span class="mdi mdi-check-circle me-2" style="color: var(--primary);"></span>Développer les compétences de leadership</li>
                <li class="mb-2"><span class="mdi mdi-check-circle me-2" style="color: var(--primary);"></span>Encourager le bénévolat et la solidarité</li>
                <li class="mb-2"><span class="mdi mdi-check-circle me-2" style="color: var(--primary);"></span>Sensibiliser aux enjeux environnementaux et sociaux</li>
                <li class="mb-2"><span class="mdi mdi-check-circle me-2" style="color: var(--primary);"></span>Créer des ponts entre les jeunes de différentes communautés</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card h-100 border-0 shadow-sm rounded-4 p-4">
            <div class="card-body">
              <div class="mb-3">
                <span class="mdi mdi-eye" style="font-size: 2.5rem; color: var(--primary);"></span>
              </div>
              <h3 class="fw-bold mb-3" style="color: var(--primary);">Notre Vision</h3>
              <p class="lh-lg">
                Nous aspirons à créer une société où chaque jeune est un citoyen actif, engagé et responsable.
                Une société où la jeunesse est reconnue comme un moteur essentiel du développement et du progrès social.
              </p>
              <p class="lh-lg">
                Notre vision est celle d'un monde où les jeunes sont au coeur des décisions qui affectent leur
                avenir, où leur voix est entendue et leurs actions valorisées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Nos Valeurs -->
  <section class="section-padding">
    <div class="container text-center">
      <h2 class="section-title mx-auto">Nos Valeurs</h2>
      <p class="text-muted mt-3 mb-5">Les principes qui guident chacune de nos actions</p>

      <div class="row g-4">
        <div class="col-lg-3 col-md-6">
          <div class="value-card p-4 rounded-4 h-100">
            <span class="mdi mdi-handshake value-icon"></span>
            <h5 class="fw-bold mt-3">Solidarité</h5>
            <p class="text-muted">Nous croyons en la force de l'entraide et de la coopération entre les jeunes.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="value-card p-4 rounded-4 h-100">
            <span class="mdi mdi-shield-check value-icon"></span>
            <h5 class="fw-bold mt-3">Intégrité</h5>
            <p class="text-muted">Nous agissons avec transparence, honnêteté et responsabilité.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="value-card p-4 rounded-4 h-100">
            <span class="mdi mdi-lightbulb-on value-icon"></span>
            <h5 class="fw-bold mt-3">Innovation</h5>
            <p class="text-muted">Nous encourageons la créativité et les idées nouvelles.</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="value-card p-4 rounded-4 h-100">
            <span class="mdi mdi-account-group value-icon"></span>
            <h5 class="fw-bold mt-3">Inclusion</h5>
            <p class="text-muted">Nous accueillons tous les jeunes sans distinction.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Structure de l'organisation -->
  <section class="section-padding bg-light">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="section-title mx-auto">Structure de l'organisation</h2>
        <p class="text-muted mt-3">Notre organisation est structurée pour assurer efficacité et transparence</p>
      </div>

      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=640&q=80"
            alt="Structure de l'organisation"
            class="img-fluid rounded-4 shadow"
          />
        </div>
        <div class="col-lg-6">
          <div class="structure-list">
            <div class="structure-item d-flex align-items-start mb-4">
              <span class="mdi mdi-star-circle me-3" style="font-size: 1.8rem; color: var(--primary);"></span>
              <div>
                <h5 class="fw-bold">Assemblée Générale</h5>
                <p class="text-muted mb-0">L'organe suprême de décision composé de tous les membres. <a href="#" class="text-primary">En savoir plus</a></p>
              </div>
            </div>
            <div class="structure-item d-flex align-items-start mb-4">
              <span class="mdi mdi-account-tie me-3" style="font-size: 1.8rem; color: var(--primary);"></span>
              <div>
                <h5 class="fw-bold">Bureau Exécutif</h5>
                <p class="text-muted mb-0">Responsable de la gestion quotidienne de l'association. <a href="#" class="text-primary">En savoir plus</a></p>
              </div>
            </div>
            <div class="structure-item d-flex align-items-start mb-4">
              <span class="mdi mdi-account-group me-3" style="font-size: 1.8rem; color: var(--primary);"></span>
              <div>
                <h5 class="fw-bold">Commissions</h5>
                <p class="text-muted mb-0">Des groupes spécialisés pour chaque domaine d'activité. <a href="#" class="text-primary">En savoir plus</a></p>
              </div>
            </div>
            <div class="structure-item d-flex align-items-start">
              <span class="mdi mdi-heart me-3" style="font-size: 1.8rem; color: var(--primary);"></span>
              <div>
                <h5 class="fw-bold">Bénévoles</h5>
                <p class="text-muted mb-0">Le coeur de notre association, engagés sur le terrain. <a href="#" class="text-primary">En savoir plus</a></p>
              </div>
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

.value-card {
  background-color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 2.5rem;
  color: var(--primary);
}

.structure-item {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.structure-item:last-child {
  border-bottom: none;
}

.dark-mode .value-card {
  background-color: #232839;
}

.dark-mode .structure-item {
  border-bottom-color: #3a3f55;
}
</style>
