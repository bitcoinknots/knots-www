<template>
  <footer class="max-w-screen">
    <div class="mx-auto">
      <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-12 p-4 md:p-6 border-onyx/10 dark:border-vanil/10 border-t">
        <div class="col-span-2 md:col-span-1 flex justify-between items-start">
          <NuxtLink to="/#home">
            <AppLogotype
              class="h-14 mt-4 md:mt-0 text-onyx dark:text-vanil hover:text-vanil dark:hover:text-brand"
            />
          </NuxtLink>
        </div>
        <div class="hidden lg:block text-3xl text-vanil dark:text-brand">
          --->
        </div>
        <div>
          <ul class="">
            <li class="">
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/#About">
                About
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/#Features">
                Features
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/#Download">
                Download
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/#Download">
                Verify
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/#Faq">
                FAQ
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink to="/#News">
                News
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="col-start-2 md:col-start-auto">
          <ul class="">
            <li class="">
              <NuxtLink
                :to="appConfig.url.github"
                target="_blank"
              >
                Github
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink
                :to="appConfig.url.telegram"
                target="_blank"
              >
                Telegram
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink
                :to="appConfig.url.discord"
                target="_blank"
              >
                Discord
              </NuxtLink>
            </li>
            <li class="">
              <NuxtLink
                :to="appConfig.url.x"
                target="_blank"
              >
                X
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="hidden col-start-2 md:col-start-auto">
          <ul class="">
            <li class="">
              <NuxtLink
                to="https://github.com/bitcoinknots/bitcoin?tab=MIT-1-ov-file"
                target="_blank"
              >
                MIT   License
              </NuxtLink>
            </li>
            <li class="">
              Privacy Policy
            </li>
            <li class="">
              Disclaimer
            </li>
          </ul>
        </div>
      </section>
      <section class="flex justify-between mt-12 p-4 md:p-6 border-onyx/10 dark:border-vanil/10 --border-t">
        <!-- <NuxtLink
        to="#Download"
          class="no-underline"
        > -->
        <div>
          <AppVersion to="#Download" />
        </div>
        <!-- </NuxtLink> -->
        <!-- Social -->
        <div class="flex gap-1 md:gap-2">
          <NuxtLink
            :to="appConfig.url.x"
            aria-label="Bitcoin Knots on X"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="X"
              class="w-8 h-8 md:w-12 md:h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.url.discord"
            aria-label="Bitcoin Knots on Discord"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Discord"
              class="text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.url.telegram"
            aria-label="appConfig.url.telegram"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Telegram"
              class="w-8 h-8 md:w-12 md:h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
          <NuxtLink
            :to="appConfig.url.github"
            aria-label="Bitcoin Knots on Github"
            target="_blank"
            class="flex justify-center items-center w-12 h-12 md:w-14 md:h-14 px-1.5  focus:outline-none focus:ring-2 rounded focus:ring-onyx/100 dark:focus:ring-brand/100 hover:bg-onyx/10 dark:hover:bg-vanil/10"
          >
            <AppIcon
              name="Github"
              class="w-8 h-8 md:w-12 md:h-12 text-onyx dark:text-vanil"
            />
          </NuxtLink>
        </div>
      </section>
    </div>
  </footer>
</template>

<script setup>
const appConfig = useAppConfig()
</script>

<style lang="postcss" scoped>
li a {
  @apply
    text-onyx dark:text-vanil
    hover:text-vanil dark:hover:text-brand
    lg:text-lg xl:text-xl
    inline-block font-semibold
    py-0.5 md:py-1 xl:py-1.5
}
</style>
