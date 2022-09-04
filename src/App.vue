<script setup>
import TrackerCard from './components/TrackerCard.vue'
</script>

<template>
  <div class="flex w-full">
    <div class="mr-7">
      <div class="bg-blue p-8 w-full max-w-[245px] h-[330px] rounded-2xl z-10">
        <img class="w-16 mb-10" src="./assets/images/image-jeremy.png" alt="jeremy">
        <p class="text-sm text-paleBlue">Report for</p>
        <p class="text-3xl break-words">Jeremy Robson</p>
      </div>
      <div class="flex flex-col justify-evenly bg-darkBlue px-8 pt-8 w-full max-w-[245px] h-[200px] rounded-2xl absolute top-[295px]">
        <span class="text-desaturatedBlue hover:text-paleBlue cursor-pointer">Daily</span>
        <span class="text-desaturatedBlue hover:text-paleBlue cursor-pointer">Weekly</span>
        <span class="text-desaturatedBlue hover:text-paleBlue cursor-pointer">Monthly</span>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-y-[58px] gap-x-7">
      <TrackerCard />
      <TrackerCard />
      <TrackerCard />
      <TrackerCard />
      <TrackerCard />
      <TrackerCard />
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
</style>
