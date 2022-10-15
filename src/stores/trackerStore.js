import { defineStore } from 'pinia';
import axios from "axios";

export const useTrackerStore = defineStore('tracker', {
  state: () => ({
    userLog: []
  }),
  actions: {
    async fetchUserWithLog() {
      try {
        const { data: response } = await axios.get(`http://localhost:3000/api/v1/reports/632ef1022e2b5c239c952290`);
        console.log(response.data);
        this.userLog = response.data;
      } catch (errors) {
        console.error(errors);
      }
    },
  },
})