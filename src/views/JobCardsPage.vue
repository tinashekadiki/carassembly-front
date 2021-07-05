<template>
  <div>
    <Highlights></Highlights>
    <JobCardTable />
  </div>
</template>

<script>

import Highlights from "../components/Highlights";
import JobCardTable from "./job-cards/JobCardTable";
export default {
  name: 'JobCardsPage',
  components: {JobCardTable, Highlights}
}
</script>
