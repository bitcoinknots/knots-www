<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-brand mx-auto h-screen flex flex-col justify-center items-center">
    <div class="">
      <h1 v-if="props.error?.statusCode === 404">
        404 - Page Not Found
      </h1>
      <h1 v-else>
        {{ props.error?.statusCode }} - An Error Occurred
      </h1>
    </div>
    <button
      class="sm:flex me-2 md:me-4 p-4 md:p-5 border-2 border-onyx hover:border-vanil rounded-lg focus:outline-none focus:ring-4 focus:ring-onyx font-bold text-onyx hover:text-vanil text-xs md:text-sm uppercase tracking-wider"
      @click="handleError"
    >
      Clear errors
    </button>
  </div>
</template>
