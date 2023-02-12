import { defineStore } from 'pinia';
import data from "../dummy_data/data.json";

export const useTrackerStore = defineStore('tracker', {
  state: () => ({
    userLog: []
  }),
  getters: {
    getUserLog() {
      return this.userLog;
    }
  },
  actions: {
    async fetchUserWithLog() {
      try {
        // you can reach your api from here with axios, I use dummy data for this
        this.userLog = data;
      } catch (errors) {
        console.error(errors);
      }
    },
  },
})