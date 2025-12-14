<template>
  <li class="group py-3 overflow-hidden border-b border-onyx/20 dark:border-vanil/10 hover:bg-onyx/5 dark:hover:bg-black/15">
    <details
      class="w-full mx-auto px-1"
    >
      <summary
        class="
          flex
          justify-between
          items-center
          w-full
          px-6 py-4
          text-left
          rounded-xl
          list-none
          group-hover:text-vanil
          cursor-pointer
          focus:outline-none
          focus:ring-1
          focus:ring-onyx dark:focus:ring-brand
        "
      >
        <span class="py-4 text-base sm:text-lg md:text-xl lg:text-xl font-bold text-onyx dark:text-vanil group-hover:text-vanil dark:group-hover:text-brand pr-4 flex-1">
          {{ props.question }}
        </span>
        <span class="flex-shrink-0 w-6 h-6 transition-transform duration-100 details-arrow">
          <svg
            class="w-full h-full text-onyx dark:text-vanil group-hover:text-vanil dark:group-hover:text-brand"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          > -->
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </summary>

      <div class="overflow-hidden">
        <p class="px-6 pb-6 text-gray-600 leading-relaxed">
          {{ props.answer }}
        </p>
      </div>
    </details>
  </li>
</template>

<script setup>
const props = defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="postcss">
/* Hide default marker */
details > summary::-webkit-details-marker {
  @apply
    hidden
}

details > summary:details-marker {
  @apply
    hidden
}

/* Rotate arrow when open */
details[open] .details-arrow {
  @apply
    rotate-180
}

details[open] summary ~ * {
  animation: sweep .2s ease-in-out;
}

@keyframes sweep {
  0%    {opacity: 0; margin-top: -30px}
  100%  {opacity: 1; margin-top: 0px}
}
</style>
