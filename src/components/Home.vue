<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
    id = "app"
  >
    <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="this.$i18n.t('flat_picture')"  alt="Picture:)"/>
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >{{this.$i18n.t('label_main')}}</span
          >
          <div>
            <p :class="{ pgray: !nightMode, 'text-light': nightMode }">{{this.$i18n.t('description')}}</p>
          </div>
          <div>
            <p :class="{ pgray: !nightMode, 'text-light': nightMode }">{{this.$i18n.t('contact')}}</p>
          </div>
          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2 "
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('gitlab')"
              v-tooltip.bottom="'Gitlab'"
            >
              <i class="fab fa-gitlab"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom='this.$i18n.t("button_resume")'
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Wave from "./helpers/Wave";

export default {
  name: "Home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Wave,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.$i18n.t('links.linkedin'), "_blank");
          break;
        case "github":
          window.open(this.$i18n.t('links.github'), "_blank");
          break;
        case "gitlab":
          window.open(this.$i18n.t('links.gitlab'), "_blank");
          break;
        case "resume":
          window.open(this.$i18n.t('links.resume'), "_blank");
          break;
      }
    },
  },
};
</script>

<style scoped>
.home-title {
  font-size: 28px;
  font-weight: 500;
}

img {
  max-width: 300px;
  margin-top: 60px;
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}

.fa {
  font-size: 15px;
}

.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}

.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}

.btn:focus {
  outline: none !important;
}

p {
  text-align: justify;
  font-weight: 400;
}

/* LEAVES */
</style>
