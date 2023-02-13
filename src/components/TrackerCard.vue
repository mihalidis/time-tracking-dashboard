<template>
  <div class="relative cursor-pointer md:w-[245px] w-full md:h-[200px] h-[128px]">
    <div  class="flex flex-row-reverse w-100 rounded-2xl"
          :class="{ [`${cardInfo.color}`]: true }">
      <img class="h-[60px]" :src="getImageUrl(cardInfo.icon)" :alt="cardInfo.icon">
    </div>
    <div class="flex flex-col justify-around rounded-2xl md:w-[245px] w-full md:h-[200px] h-[128px] px-7 pt-1 bg-darkBlue hover:bg-darkLightBlue absolute top-[35px] z-10">
      <div class="flex justify-between items-center">
        <p>{{ startCase(cardInfo.title) }}</p>
        <img class="h-1" src="../assets/images/icon-ellipsis.svg" alt="icon-ellipsis">
      </div>
      <div class="flex md:flex-col flex-row justify-between items-baseline w-100">
        <span class="text-5xl md:mb-[15px] ">{{ cardInfo.timeframes[selectedTime.title].current }}hrs</span>
        <span class="md:text-xs sm:text-xl  text-paleBlue">{{ lastTime }} - {{ cardInfo.timeframes[selectedTime.title].previous }}hrs</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { startCase } from 'lodash';

const props = defineProps({
  cardInfo: {
    type: Object,
    default() {
      return {}
    }
  },
  selectedTime: {
    type: Object,
    default() {
      return {
        title: 'daily',
        selected: true
      }
    }
  }
});

const lastTime = computed(() => {
  switch (props.selectedTime.title) {
    case 'daily':
      return 'Yesterday';
    case 'weekly':
      return 'Last Week';
    case 'monthly':
      return 'Last Month';
    default:
      return 'Yesterday';
  }
});

// methods
function getImageUrl(image) {
  return new URL(`../assets/images/${image}`, import.meta.url).href;
}
</script>