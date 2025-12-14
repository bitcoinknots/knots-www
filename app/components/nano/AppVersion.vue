<template>
  <NuxtLink
    :to="props.to"
    class="
      flex
      justify-center
      items-center
      m-1
      px-2
      py-2
      border-2
      rounded-md
      font-bold
      text-sm md:text-base lg:text-lg
      tracking-tight
      text-onyx dark:text-vanil hover:text-vanil hover:border-vanil
      border-onyx dark:border-vanil dark:hover:border-brand dark:hover:text-brand
    "
  >
    v{{ appConfig.vapp }}
  </NuxtLink>
</template>

<script setup>
const appConfig = useAppConfig()

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>
