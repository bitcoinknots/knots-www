<script setup>
const colorMode = useColorMode()

// const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const colorModeButtonLabel = computed(() =>
  isDark.value ? 'Switch to light mode' : 'Switch to dark mode',
)

const toggleColorMode = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

// const isDark = computed({
//   get() {
//     return colorMode.value === 'dark'
//   },
//   set() {
//     colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
//   },
// })
</script>

<template>
  <ClientOnly>
    <div class="relative flex">
      <button
        :class="{ 'rotate-180': isDark }"
        :aria-label="colorModeButtonLabel"
        class="rotate-0 p-3 transition-transform duration-200 ease-out"
        @click="toggleColorMode"
      >
        <AppIcon
          name="CustomColorMode"
          class="w-6 h-6 text-onyx hover:text-vanil dark:hover:text-brand dark:text-vanil"
        />
      </button>
    </div>
  </ClientOnly>
</template>
