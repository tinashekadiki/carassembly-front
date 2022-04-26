<template>
  <MainLayout title="Download Job Card" new-route="create">
    <div class="card">
      <div class="card-header"><strong>Job Card</strong> <small></small></div>
      <div class="card-body">
        <div>
          <pdf v-if="!globalLoadingState" :src="pdfsrc"></pdf>
           <Loader v-if="globalLoadingState"></Loader>
        </div>
        <div>
          <button class="btn btn-primary" @click="downloadItem">Download</button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script>
import pdf from "vue-pdf";
import { saveAs } from "file-saver";
import { http } from "../utils/http-base";
import MainLayout from "../layouts/MainLayout";
import global from "../utils/global";
import Loader from "../components/Loader";

export default {
  name: "ViewCheckList",
  mixins: [global],
  mounted() {
    this.getJobCardPdf();
    this.globalLoadingState = true;
  },
  components: {
    MainLayout,
    pdf,
    Loader
  },
  data() {
    return {
      pdfsrc: null,
    };
  },
  methods: {
    getJobCardPdf() {
      http
        .get(`/job-cards/printJobCard/${this.$route.params.id}`, {
          responseType: "blob",
        })
        .then((response) => {
          console.log("Success", response);
          const blob = new Blob([response.data]);
          const objectUrl = URL.createObjectURL(blob);
          this.pdfsrc = objectUrl;
          this.globalLoadingState = false;
        });
    },

    downloadItem() {
      http
        .get(`/job-cards/printJobCard/${this.$route.params.id}`, { responseType: "blob" })
        .then((response) => {
          saveAs(response.data, `job-card - ${this.$route.params.id}.pdf`);
        });
    },

    htmlToPDF(){

    }
  },
};
</script>

<style scoped>
.fa {
  font-size: 16px;
}
.mandatory {
  color: red;
}
</style>
