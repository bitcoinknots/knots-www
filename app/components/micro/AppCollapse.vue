<template>
  <details class="breaK-inside flex flex-col w-full mb-2 group border-2 border-onyx hover:border-vanil dark:border-vanil dark:hover:border-brand rounded-2xl cursor-pointer">
    <summary class="list-none">
      <div class="flex items-center my-2 p-4">
        <AppIcon
          :name="props.icon"
          class="
            w-24 lg:w-20 xl:w-24
            h-24 lg:h-20 xl:h-24
          text-onyx dark:group-hover:text-brand dark:text-vanil group-hover:text-vanil"
        />
        <h3
          class="ms-1 md:ms-4 lg:ms-1 font-bold dark:group-hover:text-brand group-hover:text-vanil  text-2xl md:text-3xl lg:text-2xl xl:text-3xl tracking-tight"
        >
          {{ props.title }}
        </h3>
      </div>
    </summary>
    <div>
      <slot name="collapseContent" />
    </div>
  </details>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
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
