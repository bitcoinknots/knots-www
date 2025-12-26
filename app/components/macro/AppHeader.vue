<template>
  <header
    class="top-0 z-40 fixed inset-x-0 flex justify-start items-center bg-brand dark:bg-onyx [@supports(backdrop-filter:blur(0px))]:bg-brand/70 [@supports(backdrop-filter:blur(0px))]:dark:bg-onyx/80 backdrop-filter backdrop-blur-[10px] mx-auto w-full h-20 md:h-24"
  >
    <NuxtLink
      to="/"
      aria-label="Bitcoin Knots | Home"
      class="flex justify-center items-center bg-onyx dark:bg-brand border-onyx/10 dark:border-vanil/10 border-r w-20 md:w-24 h-20 md:h-24"
      @click="menu = false"
    >
      <AppLogomark class="w-12 md:w-14 h-12 md:h-14 text-vanil dark:text-onyx" />
    </NuxtLink>

    <NuxtLink
      to="/"
      aria-label="Bitcoin Knots | Home"
      class="p-0"
      @click="menu = false"
    >
      <AppLogotype class="ms-6 h-6 md:h-7 text-onyx dark:text-vanil" />
    </NuxtLink>

    <div class="right-0 absolute flex flex-row items-center gap-1">
      <NuxtLink
        to="#Download"
        class="hidden md:flex me-2 md:me-4 p-4 md:p-5 border-2 border-onyx hover:border-vanil dark:border-vanil dark:hover:text-brand dark:hover:border-brand rounded-lg focus:outline-none focus:ring-4 focus:ring-onyx dark:focus:ring-brand font-bold text-onyx hover:text-vanil dark:text-vanil text-xs md:text-sm uppercase tracking-wider"
      >
        Download
      </NuxtLink>

      <AppColorModeButton />

      <div
        class="justify-self-start py-3 ps-2 md:ps-3.5 pe-4 md:pe-6 hover:text-vanil dark:hover:text-brand cursor-pointer"
        @click="menu = !menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script setup lang="js">
const menu = useState('menu', () => false)
</script>
