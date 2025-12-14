<template>
  <li
    class="px-8 py-6 border-onyx/10 dark:border-vanil/10 border-b w-full dark:group-hover:text-brand group-hover:text-vanil"
  >
    <NuxtLink
      :to="to"
      :aria-label="props.title"
      class="flex justify-between items-center"
    >
      <span class="title">
        {{ props.title }}
      </span>

      <span class="btn p-1 rounded font-bold text-xs uppercase bg-onyx/10 dark:bg-vanil/10">
        {{ props.type }}
      </span>
    </NuxtLink>
  </li>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  // (Icon) name
  type: {
    type: String,
    required: false,
    default: 'tar',
  },
  // label: {
  //   type: String,
  //   required: true,
  // },
})
</script>

<style lang="postcss" scoped>
a {
  @apply text-onyx
    dark:text-vanil;
}
li:hover .title {
  @apply text-vanil
  dark:text-brand;
}
li:hover .btn {
  @apply bg-vanil
  dark:bg-brand;
}
</style>
