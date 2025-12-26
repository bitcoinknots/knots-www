<template>
  <section
    id="Features"
    class="mx-4"
  >
    <AppTitle
      id="Features"
      title-a="Power"
      title-b="Features"
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
      Maintains full Bitcoin compatibility, while offering enhanced tools for node sovereignty and
      chain cleanliness.
    </h3>

    <!-- Content -->
    <div class="col-span-12">
      <div class="grid lg:grid-cols-2 lg:gap-12 xl:gap-24">
        <div>
          <div
            class="
              text-onyx
              dark:text-vanil
            "
          >
            <!-- <span
                class="
                  block
                  sm:text-lg md:text-xl lg:text-2xl
                  text-vanil
                  dark:text-brand
              "
              >/ A</span> -->
            <h4
              class="
                  font-bold
                  tracking-tight
                  md:mb-20 xl:mb-24
                  mt-4 lg:mt-12
                  text-3xl sm:text-3xl md:text-4xl xl:text-5xl
                "
            >
              Advanced Features
            </h4>
          </div>
          <ul class="text-xl">
            <AppFeature
              icon="Network"
              title="Pay-to-Endpoint"
              body="Go beyond basic payments. This feature helps protect against network-level
                  censorship by allowing payments to be sent directly to a node's IP address,
                  strengthening Bitcoin's peer-to-peer ethos."
            />
            <AppFeature
              icon="Incognito"
              title="Coinswap Implementation"
              body="Enhance your privacy on-chain. Coinswap is a trustless protocol for obfuscating
              the trail of your coins, making chain analysis more difficult. Knots brings this
              powerful feature directly to your node."
            />
            <AppFeature
              icon="Sliders"
              title="RPC & Config Enhancements"
              body="Unlock greater control for advanced users and developers. Knots includes
                  additional Remote Procedure Call (RPC) commands and configuration options, giving
                  you finer-grained control over your node's behavior."
            />
          </ul>
        </div>

        <div>
          <div
            class="
              text-onyx
              dark:text-vanil
            "
          >
            <!-- <span
                class="
                block
                sm:text-lg md:text-xl lg:text-2xl
                text-vanil
                dark:text-brand
              "
              >/ B</span> -->
            <h4
              class="
                  font-bold
                  tracking-tight
                  mb-12 lg:mb-16 xl:mb-24
                  mt-4 lg:mt-12
                  text-2xl sm:text-3xl md:text-4xl xl:text-5xl
                "
            >
              Core Experience
            </h4>
          </div>
          <ul class="text-xl">
            <AppFeature
              icon="Checkmark"
              title="Bitcoin Core Compatibility"
              body="The solid foundation you trust. Bitcoin Knots is a full-node implementation that
                  validates all consensus rules, ensuring complete compatibility and security of the
                  Bitcoin network."
            />
            <AppFeature
              icon="GUI"
              title="Graphical User Interface (GUI) Patches"
              body="A more informative and usable node experience. The Knots GUI includes various
                  community-developed patches that add helpful information and tools not found in
                  the standard interface."
            />
            <AppFeature
              icon="Clock"
              title="Conservative Release Cycle"
              body="Stability for the long haul. Knots often incorporates features from Bitcoin Core
                  after they have undergone extensive testing, offering a robust and reliable node
                  option for production environments."
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
