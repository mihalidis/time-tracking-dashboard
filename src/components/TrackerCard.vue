<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="relative cursor-pointer w-[245px] h-[200px]">
    <div  class="flex flex-row-reverse w-100 rounded-2xl"
          :class="{ [`${bgColor}`]: true }">
      <img class="h-[60px]" :src="`/src/assets/images/${imgSrc}`" alt="icon">
    </div>
    <div class="flex flex-col justify-around rounded-2xl w-[245px] h-[200px] px-7 pt-1 bg-darkBlue hover:bg-darkLightBlue absolute top-[35px] z-10">
      <span class="flex justify-between items-center">
        <p>{{ props.title }}</p>
        <img class="h-1" src="../assets/images/icon-ellipsis.svg" alt="icon-ellipsis">
      </span>
      <span class="text-5xl">4hrs</span>
      <span class="text-xs text-paleBlue">Last week - 36hrs</span>
    </div>
  </div>
</template>