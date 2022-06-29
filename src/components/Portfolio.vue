<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >{{ this.$i18n.t("label_portfolio") }}</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <vue-tabs :activeTextColor="!nightMode ? '#535A5E' : '#dfdfdf'">
        <v-tab title="java">
          <br />
          <div class="row">
            <div
              class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
              v-for="(portfolio, idx) in getInfo()"
              :key="portfolio.name"
            >
              <Card
                :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
                :portfolio="portfolio"
                @show="showModalFn"
                data-aos="fade-up"
                :nightMode="nightMode"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
            </div>
          </div>
        </v-tab>
      </vue-tabs>
    </div>
    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import DesignModal from "./helpers/DesignModal";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    Card,
    VueTabs,
    VTab,
    // eslint-disable-next-line vue/no-unused-components
    VueperSlides,
    // eslint-disable-next-line vue/no-unused-components
    VueperSlide,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      design_info: [],
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      showBtn: true,
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  methods: {
    getInfo() {
      let info = [];
      for (let i = 0; i < this.$i18n.t('portfolio').length; i++) {
        info.push(this.$i18n.t('portfolio')[i]);
      }
      return info;
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

</style>
