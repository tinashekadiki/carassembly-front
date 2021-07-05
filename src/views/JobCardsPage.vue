<template>
  <div>
    <Highlights></Highlights>
    <JobCardTable v-if="jobCardsList.length" :jobCardList="jobCardsList"></JobCardTable>
    <Circle10 v-else></Circle10>
  </div>
</template>

<script>

import Highlights from "../components/Highlights";
import JobCardTable from "./job-cards/JobCardTable";
import {http} from "../utils/http-base";
import Circle10 from "vue-loading-spinner/src/components/Circle10";

export default {
  mounted() {
    this.getJobCards();
  },
  data(){
    return {
      jobCardsList: []
    }
  },
  name: 'JobCardsPage',
  components: {JobCardTable, Highlights, Circle10},
  methods: {
    getJobCards(){
      this.globalLoadingState = true;
      http.get('/job-cards/list').then(resp => {
        this.jobCardsList = resp;
      }).catch(err => {
            console.log(err)
          }
      ).finally(() => {
        this.globalLoadingState = false;
      })
    }
  }
}
</script>
