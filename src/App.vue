<template>
  <div class="flex w-full">
    <div class="mr-7">
      <div class="bg-blue p-8 w-full max-w-[245px] h-[330px] rounded-2xl z-10">
        <img class="w-16 mb-10" src="./assets/images/image-jeremy.png" alt="jeremy">
        <p class="text-sm text-paleBlue">Report for</p>
        <p class="text-3xl break-words">Jeremy Robson</p>
      </div>
      <div class="flex flex-col justify-evenly bg-darkBlue px-8 pt-8 w-full max-w-[245px] h-[200px] rounded-2xl absolute top-[295px]">
        <span v-for="(time, index) in timeSelection.selection"
              :key="index"
              class="hover:text-paleBlue cursor-pointer"
              @click.prevent="changeSelectedTime(time)"
              :class="time.selected ? 'text-paleBlue' : 'text-desaturatedBlue'" >{{ time.title }}</span>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-y-[58px] gap-x-7">
      <TrackerCard v-for="(item, index) in trackerData"
                    :key="index"
                    :card-info="item"
                    :selected-time="selectedTime" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, onBeforeMount } from 'vue';
import TrackerCard from './components/TrackerCard.vue'
import { useTrackerStore } from './stores/trackerStore.js';

const store = useTrackerStore();

// data
const trackerCards = reactive({ data: [
  {
    icon: 'icon-work.svg',
    title: 'work',
    color: 'bg-lightRedWork'
  },
  {
    icon: 'icon-play.svg',
    title: 'play',
    color: 'bg-softBlue'
  },
  {
    icon: 'icon-study.svg',
    title: 'study',
    color: 'bg-lightRedStudy'
  },
  {
    icon: 'icon-exercise.svg',
    title: 'exercise',
    color: 'bg-limeGreenWorkout'
  },
  {
    icon: 'icon-social.svg',
    title: 'social',
    color: 'bg-violetSocial'
  },
  {
    icon: 'icon-self-care.svg',
    title: 'self_care',
    color: 'bg-softOrangeSelfCare'
  }
] });

const timeSelection = reactive({ selection: [
  {
    title: 'daily',
    selected: true
  },
  {
    title: 'weekly',
    selected: false
  },
  {
    title: 'monthly',
    selected: false
  }
]});

// computed
const trackerData = computed(() => {
  return trackerCards.data.map(item => {
    const indexItem = store.getUserLog.findIndex(log => log.title === item.title);

    return {
      ...item,
      ...store.getUserLog[indexItem]
    }
  });
});

const selectedTime = computed(() => {
  return timeSelection.selection.find(time => time.selected);
});

// lifecycle hooks
onBeforeMount(() => {
  store.fetchUserWithLog();
});

// methods
function changeSelectedTime (time) {
  timeSelection.selection.forEach(item => {
    if (item.title === time.title) {
      item.selected = true;
    } else {
      item.selected = false;
    }
  });
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
</style>
