<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import feedbackData from '../Data/feedback.json'

const feedbacks = ref(feedbackData)
const currentIndex = ref(0)
let intervalId = null

const currentFeedback = ref(feedbacks.value.length > 0 ? feedbacks.value[0] : null)

onMounted(() => {
  if (feedbacks.value.length > 1) {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % feedbacks.value.length
      currentFeedback.value = feedbacks.value[currentIndex.value]
    }, 45000)
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="section-padding">
    <div class="container text-center">
      <h2 class="section-title mx-auto">Ce que disent nos membres</h2>

      <div v-if="feedbacks.length === 0" class="mt-5">
        <p class="text-muted fs-5">Aucun avis disponible pour le moment.</p>
      </div>

      <div v-else class="row justify-content-center mt-5">
        <div class="col-lg-8">
          <div class="feedback-card p-4 p-md-5 rounded-4 shadow-sm">
            <div class="mb-4">
              <img :src="currentFeedback.avatar" :alt="currentFeedback.name" class="rounded-circle" width="80" height="80" />
            </div>
            <p class="feedback-text fst-italic mb-4">
              <span class="mdi mdi-format-quote-open me-1" style="color: var(--primary); font-size: 1.5rem;"></span>
              {{ currentFeedback.message }}
              <span class="mdi mdi-format-quote-close ms-1" style="color: var(--primary); font-size: 1.5rem;"></span>
            </p>
            <h5 class="fw-bold mb-1" style="color: var(--primary);">{{ currentFeedback.name }}</h5>
            <small class="text-muted">{{ currentFeedback.role }}</small>
            <div class="feedback-dots mt-4">
              <span
                v-for="(_, index) in feedbacks"
                :key="index"
                class="dot"
                :class="{ active: index === currentIndex }"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feedback-card {
  background-color: var(--light-gray);
  transition: background-color 0.4s ease;
}

.dark-mode .feedback-card {
  background-color: #232839;
}

.feedback-text {
  font-size: 1.1rem;
  line-height: 1.8;
}

.feedback-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  transition: background-color 0.3s ease;
}

.dot.active {
  background-color: var(--primary);
}
</style>
