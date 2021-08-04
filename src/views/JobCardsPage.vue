<template>
  <MainLayout title="Job Cards" newRoute="create">
    <Highlights></Highlights>
    <JobCardTable v-if="!globalLoadingState" :jobCardList="jobCardsList.data"></JobCardTable>
    <Circle10 v-else></Circle10>
  </MainLayout>
</template>

<script>

import Highlights from "../components/Highlights";
import JobCardTable from "./job-cards/JobCardTable";
import {http} from "../utils/http-base";
import Circle10 from "vue-loading-spinner/src/components/Circle10";
import global from "../utils/global";
import MainLayout from "../layouts/MainLayout";

export default {
  mixins: [global],
  mounted() {
    this.getJobCards();
  },
  data(){
    return {
      jobCardsList: []
    }
  },
  name: 'JobCardsPage',
  components: {MainLayout, JobCardTable, Highlights, Circle10},
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
        this.getAllStatuses();
      });
    }
  }
}
</script>
