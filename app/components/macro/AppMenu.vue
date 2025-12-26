<template>
  <div
    v-show="menu"
    class="top-0 right-0 left-0 z-40 fixed bg-brand dark:bg-onyx mx-auto px-0 h-[100dvh]"
  >
    <header
      class="top-0 z-40 fixed inset-x-0 flex justify-start items-center bg-brand dark:bg-onyx mx-auto w-full h-20 md:h-24"
    >
      <NuxtLink
        to="/"
        class="flex justify-center items-center bg-onyx dark:bg-brand w-20 md:w-24 h-20 md:h-24"
        @click="menu = false"
      >
        <AppLogomark class="w-12 md:w-14 h-12 md:h-14 text-vanil" />
      </NuxtLink>

      <NuxtLink
        to="/"
        class="p-0"
        @click="menu = false"
      >
        <AppLogotype class="ms-6 h-6 md:h-7 text-onyx dark:text-vanil" />
      </NuxtLink>

      <div class="right-0 absolute flex flex-row items-center gap-1">
        <div
          class="justify-self-start py-3 ps-2 md:ps-3.5 pe-4 md:pe-6 cursor-pointer"
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

    <nav class="mx-4 md:mx-24 px-2 pt-32 overscroll-contain text-2xl md:text-3xl tracking-tight">
      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems1"
            :key="index"
            class="my-0 py-1 md:py-2"
          >
            <NuxtLink
              :to="menuItem.url"
              class="group flex items-center justify-between w-12/12 hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
              @click="menu = false"
            >
              <span class="">{{ menuItem.title }}</span>
              <span class="w-28 opacity-0 group-hover:opacity-100 px-2 arrow">---></span>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems2"
            :key="index"
            class="my-0 py-1 md:py-2"
          >
            <NuxtLink
              :to="menuItem.url"
              class="group flex items-center justify-between w-12/12 hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
              @click="menu = false"
            >
              <span class="">{{ menuItem.title }}</span>
              <span class="w-28 opacity-0 group-hover:opacity-100 px-2 arrow">---></span>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems3"
            :key="index"
            class="my-0 py-1 md:py-2"
          >
            <NuxtLink
              :to="menuItem.url"
              class="group flex items-center justify-between w-12/12 hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
              @click="menu = false"
            >
              <span class="">{{ menuItem.title }}</span>
              <span class="w-28 opacity-0 group-hover:opacity-100 px-2 arrow">---></span>
            </NuxtLink>
          </li>
        </ul>
      </section>

      <section class="flex justify-start items-start w-full h-full">
        <ul class="block w-full">
          <li
            v-for="(menuItem, index) in menuItems4"
            :key="index"
            class="my-0 py-1 md:py-2"
          >
            <NuxtLink
              :to="menuItem.url"
              class="group flex items-center justify-between w-12/12 hover:bg-onyx/5 dark:hover:bg-vanil/5 mx-1 py-2 ps-2 rounded-md text-onyx dark:text-vanil"
              @click="menu = false"
            >
              <span class="">{{ menuItem.title }}</span>
              <span class="w-28 opacity-0 group-hover:opacity-100 px-2 arrow">---></span>
            </NuxtLink>
          </li>
        </ul>
      </section>
    </nav>
  </div>
</template>

<script setup lang="ts">
const menu = useState('menu', () => false)

// const appConfig = useAppConfig()

// ------------------------------------------------>
// Menu Items

const menuItems1 = ref([
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '#About',
    // slug: '',
  },
  {
    title: 'Features',
    url: '#Features',
    // slug: '',
  },
])

const menuItems2 = ref([
  {
    title: 'Download',
    url: '#Download',
    // slug: '',
  },
  {
    title: 'Verify',
    url: '#Download',
    // slug: '',
  },
])

const menuItems3 = ref([
  // {
  //   title: 'Documentation',
  //   url: '#Documentation',
  //   // slug: 'documentation',
  // },
  // {
  //   title: 'Blog',
  //   url: '#Blog',
  //   // slug: '',
  // },
  // {
  //   title: 'News',
  //   url: '/'
  //   // slug: 'news',
  // },
  // {
  //   title: 'About',
  //   url: '/'
  //   // slug: 'about',
  // }
  {
    title: 'FAQ',
    url: '#Faq',
    // slug: 'faq',
  },
])

const menuItems4 = ref([
  // {
  //   title: 'Contribute',
  //   url: '#Contribute',
  //   // slug: '',
  // },
  {
    title: 'News',
    url: '#News',
    // slug: 'news',
  },
  // {
  //   title: 'About',
  //   url: '/'
  //   // slug: 'about',
  // }
])

onMounted(() => {
  // Press ESC key to exit modal
  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Escape' && menu.value == true) {
      menu.value = false
    }
  })
})
</script>

<style lang="postcss" scoped>
li a.router-link-exact-active {
  @apply font-bold
    text-vanil
    dark:text-brand
    pe-4;
}

.router-link-exact-active .arrow {
  @apply opacity-100
    rotate-180;
}
</style>
