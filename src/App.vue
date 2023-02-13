<template>
  <div class="flex md:flex-row flex-col w-full">
    <div class="md:mr-7 mr-0">
      <div class="flex md:flex-col flex-row gap-x-7 bg-blue p-8 w-full md:max-w-[245px] max-w-[100%] md:h-[330px] h-[115px] rounded-2xl z-10">
        <img class="w-[70px] h-[70px] mb-10" src="./assets/images/image-jeremy.png" alt="jeremy">
        <span class="name-area">
          <p class="text-sm text-paleBlue">Report for</p>
          <p class="text-3xl md:break-words md:whitespace-normal whitespace-nowrap">Jeremy Robson</p>
        </span>
      </div>
      <div class="flex md:flex-col flex-row justify-evenly bg-darkBlue px-8 pt-8 w-full md:max-w-[245px] max-w-full md:h-[200px] h-[80px] rounded-2xl relative md:top-[-28px] top-[-20px]">
        <span v-for="(time, index) in timeSelection.selection"
              :key="index"
              class="hover:text-paleBlue text-xl cursor-pointer"
              @click.prevent="changeSelectedTime(time)"
              :class="time.selected ? 'text-paleBlue' : 'text-desaturatedBlue'" >{{ startCase(time.title) }}</span>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:gap-y-[6px] gap-y-[58px] gap-x-7">
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
import { startCase } from 'lodash';

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
