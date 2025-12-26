<template>
  <section class="relative h-screen pt-36">
    <div class="@container mx-4">
      <h1
        class="
          text-[21cqw] sm:text-[17cqw] lg:text-[15cqw] xl:text-[14cqw] 2xl:text-[11cqw]
          font-bold
          leading-[1]
          tracking-tighter
          "
      >
        Bitcoin Is
        <span
          class="
            block
            text-vanil dark:text-brand
          "
        > Money </span>
      </h1>

      <h2
        class="
            flex bottom-52
            items-start
            justify-between
            md:relative md:bottom-0
            mt-[10cqw] md:mt-[8cqw] lg:mt-[6cqw]
            text-[3.2cqw] md:text-[3cqw] lg:text-[2.75cqw] 2xl:text-[2.5cqw]
            tracking-[.5cqw]
            uppercase
          "
      >
        <span class="">Take Control</span>
        <span
          class="
            text-onyx
            dark:text-brand
          "
        >---></span>
        <span class="">Own Your Node</span>
      </h2>
    </div>
    <div
      class="
          absolute
          w-full
          md:flex md:flex-row-reverse items-center
          bottom-4 md:bottom-12
          px-4
        "
    >
      <NuxtLink
        to="#Download"
        class="
            mb-4 md:mb-0
            w-full md:w-auto
            block
            md:inline-block
            rounded-lg lg:rounded-xl
            px-4 md:px-5 --2xl:px-7
            py-6 md:py-8 --2xl:py-10
            text-lg
            font-bold
            uppercase
            text-center
            tracking-wide
            focus:outline-none
            focus:ring-4
            border-2
            border-onyx dark:border-brand hover:border-vanil dark:hover:border-vanil
            text-vanil dark:text-onyx hover:text-onyx dark:hover:text-onyx
            bg-onyx dark:bg-brand hover:bg-vanil dark:hover:bg-vanil
            focus:ring-onyx dark:focus:ring-vanil
          "
      >
        Get Bitcoin Knots
      </NuxtLink>
      <NuxtLink
        to="#Features"
        class="
            me-4
            w-full md:w-auto
            block
            md:inline-block
            rounded-lg lg:rounded-xl
            px-4 md:px-5 --2xl:px-6
            py-6 md:py-8 --2xl:py-9
            text-lg --2xl:text-2xl
            font-bold
            uppercase
            text-center
            tracking-wide
            focus:outline-none
            focus:ring-4
            border-2
            text-onyx dark:text-vanil
            bg-brand dark:bg-onyx
            hover:text-vanil dark:hover:text-brand
            border-onyx dark:border-vanil
            hover:border-vanil dark:hover:border-brand
            focus:ring-onyx dark:focus:ring-vanil
          "
      >
        Learn More
      </NuxtLink>
    </div>
  </section>
</template>
