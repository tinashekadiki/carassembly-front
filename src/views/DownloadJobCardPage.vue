<template>
  <MainLayout title="Download Job Card" new-route="create">
    <div class="card">
      <div class="card-header"><strong>Job Card</strong> <small></small></div>
      <div class="card-body">
        <div>
          <pdf :src="pdfsrc"></pdf>
        </div>
        <div>
          <button @click="downloadItem">Print Download</button>
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

export default {
  name: "ViewCheckList",
  mixins: [global],
  mounted() {
    this.getJobCardPdf();
  },
  components: {
    MainLayout,
    pdf,
  },
  data() {
    return {
      pdfsrc: null,
    };
  },
  methods: {
    getJobCardPdf() {
      http
        .get("/job-cards/users/export/pdf", {
          responseType: "blob",
        })
        .then((response) => {
          console.log("Success", response);
          const blob = new Blob([response.data]);
          const objectUrl = URL.createObjectURL(blob);
          this.pdfsrc = objectUrl;
        });
    },

    downloadItem() {
      http
        .get("/job-cards/users/export/pdf", { responseType: "blob" })
        .then((response) => {
          saveAs(response.data, "job-card.pdf");
        });
    },
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
