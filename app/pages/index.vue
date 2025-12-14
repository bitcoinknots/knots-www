<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <!-- <AppBreakpoints /> -->
  <div
    id="home"
    class="container mx-auto w-full overflow-hidden"
  >
    <AppHero />
    <section
      class="mx-4 relative"
    >
      <AppTitle
        id="About"
        title-a="Built for"
        title-b="Sovereignty"
      />

      <p
        class="
          w-full lg:w-10/12 xl:w-9/12
          lg:mb-12
          mt-12 sm:mt-14 md:mt-20 lg:mt-32
          text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
          leading-normal sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal
          tracking-[1]
        "
      >
        <!--  eslint-disable-next-line vue/no-parsing-error -->
        <span class="font-bold tracking-tight"> Bitcoin Knots </span> ---> Is a free and open-source full node
        implementation that empowers you to fully validate the blockchain and enforce Bitcoin's
        rules. It includes advanced features and privacy patches not yet available in other clients,
        giving you greater control over your financial sovereignty.
      </p>

      <div class="grid lg:grid-cols-12 lg:gap-8 2xl:gap-0">
        <div class="lg:col-span-6 2xl:col-span-5 xl:me-12 mt-12">
          <h3
            class="
              py-2 md:py-4
              text-xl sm:text-xl md:text-2xl xl:text-3xl
              font-bold
              dark:text-brand
            "
          >
            A Node for the Original Vision
          </h3>
          <p>
            In a climate of increasing block space debate and protocol changes that risk altering
            Bitcoin's core value proposition, running a node is more critical than ever.
          </p>
          <p
            class="
              my-2 lg:my-4
              ps-8
              sm:text-base md:text-lg lg:text-xl
              leading-relaxed lg:leading-normal
              border-l-8
              border-onyx
              dark:border-brand
            "
          >
            Bitcoin Knots is built for those who believe in a conservative approach to consensus and a
            clear separation between monetary layer and application layer.
          </p>
          <p>
            It implements default policies that prioritize financial transactions, helping to
            safeguard the chain from bloat and ensure it remains accessible for its primary purpose:
            peer-to-peer electronic cash.
          </p>
        </div>

        <div class="lg:col-span-6 2xl:col-span-5 xl:me-12 mt-12">
          <h3
            class="
              py-2 md:py-4
              text-xl sm:text-xl md:text-2xl xl:text-3xl
              font-bold
              dark:text-brand
            "
          >
            Your Voice in the Consensus
          </h3>
          <p>
            While other clients may follow a path of increasing permissiveness, Knots provides a
            technical implementation for a different viewpoint.
          </p>
          <p>
            By choosing Knots, you are not just running a node, you are casting a vote for a specific
            vision of Bitcoin's future. You are taking a stand for a scalable, efficient, and
            sovereign monetary network, directly enforcing your preferred rules on the network you
            help secure.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="hidden lg:flex py-28 col-span-5 text-9xl text-vanil dark:text-brand font-bold justify-start items-center">
          --->
        </div>
        <div
          id="Knots"
          class="pt-16 lg:py-28 col-span-12 lg:col-span-7 lg:col-start-6"
        >
          <AppLogotype class="w-full text-onyx dark:text-vanil" />
        </div>
      </div>
    </section>

    <!-- ////////////////////////////////////////////////////////////////////////////////////// Features -->
    <AppFeatures />
    <AppDownloadVerify />

    <!-- ////////////////////////////////////////////////////////////////////////////////// Download & Verify -->
    <!-- FAQs -->

    <!-- QA -->
    <AppFaq />
    <!-- Mail -->
    <section
      class="mx-4 mb-24"
    >
      <div class="">
        <AppTitle
          id="News"
          title-a="Stay In"
          title-b="The Loop"
        />

        <h3
          class="
          w-full lg:w-10/12 xl:w-9/12
          mb-12
          mt-12 sm:mt-14 md:mt-20 lg:mt-32
          text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl
          leading-normal sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal
          tracking-[1]
      "
        >
          Get release announcements and critical security advisories directly from the lead
          maintainer ---> Luke Dashjr.
        </h3>

        <p class="my-12 text-xl md:text-2xl xl:text-3xl font-bold tracking-tight">
          Choose your preferred way to subscribe:
        </p>
      </div>

      <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
        <div class="">
          <div class="">
            <AppIcon
              name="Email"
              class="
                -ms-3 h-20 w-20 md:h-24 md:w-24 text-vanil
                dark:text-brand
              "
            />
          </div>
          <h4 class="my-2 md:my-4 text-xl xl:text-2xl font-bold">
            Subscribe with any Email Address
          </h4>
          <p>
            This is the simplest method and doesn't require a Google account. Just send a blank
            email to
            <NuxtLink
              :to="appConfig.url.group_mailto"
              class="font-bold"
            >
              bitcoin-knots-announce+subscribe@googlegroups.com
            </NuxtLink>. You will receive a confirmation email. Simply reply to it to complete your
            subscription.
          </p>
        </div>

        <div class="">
          <div class="">
            <AppIcon
              name="G"
              class="
                -ms-4 h-20 w-20 md:h-24 md:w-24 text-vanil
                dark:text-brand
              "
            />
          </div>
          <h4 class="my-2 md:my-4 text-xl xl:text-2xl font-bold">
            Subscribe with a Google Account
          </h4>
          <p>
            If you prefer to manage subscriptions through Google Groups.
            <NuxtLink
              :to="appConfig.url.group"
              class="font-bold"
            >Click here to visit the Google Groups page</NuxtLink>
            and click the <span class="italic">"Join Group"</span> button.
          </p>
        </div>
      </div>
    </section>
  </div>
  <!-- </NuxtLayout> -->
</template>

<script setup>
const appConfig = useAppConfig()
</script>
