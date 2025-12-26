<template>
  <div
    :id="props.id"
    class="@container w-full pt-24 md:pt-32 lg:pt-36"
  >
    <h2
      class="
      font-bold
      leading-[1]
      tracking-tighter
      text-[14cqw]
      md:text-[13cqw]
      lg:text-[12cqw]
      2xl:text-[9cqw]
      "
    >
      <span
        class="
        block
      text-onyx
      dark:text-vanil
      "
      > {{ props.titleA }} </span>
      <span
        class="
        block
      text-vanil
      dark:text-brand
      "
      > {{ props.titleB }} </span>
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  titleA: {
    type: String,
    required: true,
  },
  titleB: {
    type: String,
    required: true,
  },
})
</script>
