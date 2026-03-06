<script setup>
import { computed } from 'vue'

const props = defineProps({
  activity: {
    type: Object,
    required: true
  }
})

const status = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const start = new Date(props.activity.startDate)
  const end = new Date(props.activity.endDate)

  if (end < today) return { label: 'Terminé', class: 'badge-termine' }
  if (start <= today && today <= end) return { label: 'En cours', class: 'badge-en-cours' }
  return { label: 'À venir', class: 'badge-a-venir' }
})

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <div class="card h-100 shadow-sm border-0 activity-card">
    <div class="position-relative">
      <img :src="activity.image" class="card-img-top" :alt="activity.title" style="height: 200px; object-fit: cover;" />
      <span class="badge position-absolute top-0 end-0 m-2 px-3 py-2" :class="status.class">
        {{ status.label }}
      </span>
    </div>
    <div class="card-body d-flex flex-column">
      <h5 class="card-title fw-bold">{{ activity.title }}</h5>
      <p class="card-text text-muted flex-grow-1">{{ activity.description }}</p>
      <div class="d-flex justify-content-between align-items-center mt-3">
        <small class="text-muted">
          <span class="mdi mdi-calendar-start me-1"></span>{{ formatDate(activity.startDate) }}
        </small>
        <small class="text-muted">
          <span class="mdi mdi-calendar-end me-1"></span>{{ formatDate(activity.endDate) }}
        </small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activity-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12) !important;
}
</style>
