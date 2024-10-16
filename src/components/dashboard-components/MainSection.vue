<script setup lang="ts">
import GreetingsMessage from './mainsection-components/GreetingsMessage.vue'
import NewShipment from './mainsection-components/NewShipment.vue'
import AccountBalance from './mainsection-components/AccountBalance.vue'
</script>

<template>
  <main>

    <header class="flex justify-between mb-9">

      <GreetingsMessage />
      <NewShipment />

    </header>

    <section>

      <section>

        <section>
          <div class="w-[32.94%] flex rounded-lg border border-[#E5E5E5] px-5 py-[22px] bg-[#F9F9F9]">

            <section class="w-[77.14%] mr-[10px]">

              <section class="mb-[30px]">
                <img src="../../assets/svgs/money-02.svg">              
              </section>

              <section>
                <AccountBalance />
              </section>

            </section>

            <section class="w-[10.95%]"></section>

          </div>
        </section>

        <section></section>

      </section>

      <section></section>

    </section>

  </main>
</template>

<style scoped>
</style>