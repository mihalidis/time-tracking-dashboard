<template>
  <div class="relative cursor-pointer w-[245px] h-[200px]">
    <div  class="flex flex-row-reverse w-100 rounded-2xl"
          :class="{ [`${cardInfo.color}`]: true }">
      <img class="h-[60px]" :src="`src/assets/images/${cardInfo.icon}`" :alt="cardInfo.icon">
    </div>
    <div class="flex flex-col justify-around rounded-2xl w-[245px] h-[200px] px-7 pt-1 bg-darkBlue hover:bg-darkLightBlue absolute top-[35px] z-10">
      <span class="flex justify-between items-center">
        <p>{{ startCase(cardInfo.title) }}</p>
        <img class="h-1" src="../assets/images/icon-ellipsis.svg" alt="icon-ellipsis">
      </span>
      <span class="text-5xl">{{ cardInfo.timeframes[selectedTime.title].current }}hrs</span>
      <span class="text-xs text-paleBlue">{{ lastTime }} - {{ cardInfo.timeframes[selectedTime.title].previous }}hrs</span>
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
</script>