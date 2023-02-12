<template>
  <div class="relative cursor-pointer w-[245px] h-[200px]">
    <div  class="flex flex-row-reverse w-100 rounded-2xl"
          :class="{ [`${cardInfo.color}`]: true }">
      <img class="h-[60px]" :src="`/src/assets/images/${cardInfo.icon}`" alt="icon">
    </div>
    <div class="flex flex-col justify-around rounded-2xl w-[245px] h-[200px] px-7 pt-1 bg-darkBlue hover:bg-darkLightBlue absolute top-[35px] z-10">
      <span class="flex justify-between items-center">
        <p>{{ cardInfo.title }}</p>
        <img class="h-1" src="../assets/images/icon-ellipsis.svg" alt="icon-ellipsis">
      </span>
      <span class="text-5xl">4hrs</span>
      <span class="text-xs text-paleBlue">Last week - 36hrs</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  cardInfo: {
    type: Object,
    default() {
      return {}
    }
  }
});
</script>