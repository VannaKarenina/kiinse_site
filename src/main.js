import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'

var VueCookie = require('vue-cookie');

Vue.use(VueI18n);
Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

const i18n = new VueI18n({
  locale: (localStorage.getItem('lang') || navigator.language.split('-')[0] || 'en'),
  messages: {
    ru: {
      logo_name: "kiinse",
      flat_picture: require("@/assets/potrait.png"),
      button_resume: "Резюме",
      button_visit_website: "Узнать больше",
      label_portfolio: "Проекты",
      label_skills: "Навыки",
      label_main: "Привет, мир!",
      menu_skills: "навыки",
      menu_about: "обо мне",
      menu_portfolio: "проекты",
      night_mode: "Тёмный режим",
      light_mode: "Светлый режим",
      config: {
        use_cookies: true,
        navbar: {
          blur: false
        }
      },
      description:
          "Я студент 4 курса в Политехническом Колледже Городского Хозяйства в городе Санкт-Петерубрг, Россия. Начал увлекаться программированием еще со школы, а после поступления в колледж углубился в изучение Java и различных фреймворков для нее. Сейчас я пишу различные программы на этом языке, но в основном пишу плагины для Майна и Чат-ботов. ",
      contact: "По всем вопросам: holygolf@icloud.com",
      links: {
        linkedin: "https://www.linkedin.com/in/kiinse/",
        github: "https://github.com/kiinse",
        gitlab: "https://gitlab.com/kiinse",
        resume: "https://github.com/kiinse/resume"
      },
      skills: [
        {
          title: "Языки программирования",
          info: [
            "Java",
            "C#",
            "Python",
          ],
          icon: "fa fa-code"
        },
        {
          title: "Базы данных",
          info: ["MySQL", "PostgreSQL", "LiteSQL"],
          icon: "fa fa-database"
        },
        {
          title: "Операционные системы и инструменты",
          info: [
            "Ubuntu",
            "Fedora",
            "Windows",
            "Trello",
            "JIRA",
            "Docker",
            "YouTrack",
            "Space"
          ],
          icon: "fas fa-tools"
        },
      ],
      portfolio: [
        {
          name: "PKGHBot",
          pictures: [
            {
              img: require("./assets/portfolio/pkghbot.jpg")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "Moleculer", "PostgreSQL", "Telegram", "Jsoup", "Lombok", "Slf4j"],
          category: "Чат-бот",
          visit: "https://github.com/PKGHBot/PKGHBot-Telegram",
          description: "Telegram чат-бот, цель которого облегчить жизнь студентам колледжа \"ПКГХ\"."
        },
        {
          name: "DarkWaterAPI",
          pictures: [
            {
              img: require("./assets/portfolio/darkwaterapi.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Gradle", "Moleculer", "PostgreSQL", "PaperMC"],
          category: "FrameWork",
          visit: "https://gitlab.com/nubilum-development/project-watermelon/DarkWaterAPI",
          description: "Мощная библиотека для создания плагинов для серверов Minecraft, работающих на ядре PaperMC."
        },
        {
          name: "ColdySteps",
          pictures: [
            {
              img: require("./assets/portfolio/coldysteps.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "PostgreSQL", "PaperMC"],
          category: "Плагин",
          visit: "https://gitlab.com/nubilum-development/project-watermelon/coldysteps",
          description:
              "Плагин для PaperMC, добавляющий систему холода с возможностью тонкой настройки."
        },
        {
          name: "ThirstForWater",
          pictures: [
            {
              img: require("./assets/portfolio/thirstforwater.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "PostgreSQL", "PaperMC"],
          category: "Плагин",
          visit: "https://gitlab.com/nubilum-development/project-watermelon/ThirstForWaterReload",
          description:
              "Плагин для PaperMC, добавляющий систему жажды с возможностью тонкой настройки."
        },
        {
          name: "SoulAftermath",
          pictures: [
            {
              img: require("./assets/portfolio/soulaftermath.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "PostgreSQL", "PaperMC"],
          category: "Плагин",
          description:
              "Плагин для игрового сервера Minecraft \"CloudCraft Instinct\", добавляющий системы заданий и маны."
        }
      ],
    },
    en: {
      name: "Aleksandr Shumilov",
      logo_name: "kiinse",
      flat_picture: require("@/assets/potrait.png"),
      button_resume: "Resume",
      button_visit_website: "visit website",
      label_portfolio: "projects",
      label_skills: "skills",
      label_main: "Hello World!",
      menu_skills: "skills",
      menu_about: "about",
      menu_portfolio: "projects",
      night_mode: "Night mode",
      light_mode: "Light mode",
      config: {
        use_cookies: true,
        navbar: {
          blur: false
        }
      },
      description:
          "A fourth-year student at the College \"Polytechnic College of Urban Economy (ПКГХ)\" in St. Petersburg, Russia. I started to get involved in programming since high school, and after entering college, I delved into the study of Java and various frameworks for it. Now I write various programs in this language, but mainly write plugins for Minecraft and chatbots. ",
      contact: "For all inquiries please contact: holygolf@icloud.com",
      links: {
        linkedin: "https://www.linkedin.com/in/kiinse/",
        github: "https://github.com/kiinse",
        gitlab: "https://gitlab.com/kiinse",
        resume: "https://github.com/kiinse/resume"
      },
      skills: [
        {
          title: "languages",
          info: [
            "Java",
            "C#",
            "Python",
          ],
          icon: "fa fa-code"
        },
        {
          title: "databases",
          info: ["MySQL", "PostgreSQL", "LiteSQL"],
          icon: "fa fa-database"
        },
        {
          title: "operating systems & tools",
          info: [
            "Ubuntu",
            "Fedora",
            "Windows",
            "Trello",
            "JIRA",
            "Docker",
            "YouTrack",
            "Space"
          ],
          icon: "fas fa-tools"
        },
      ],
      portfolio: [
        {
          name: "PKGHBot",
          pictures: [
            {
              img: require("./assets/portfolio/pkghbot.jpg")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "Moleculer", "PostgreSQL", "Telegram", "Jsoup", "Lombok", "Slf4j"],
          category: "Chat-Bot",
          visit: "https://github.com/PKGHBot/PKGHBot-Telegram",
          description: "Telegram ChatBot, the purpose of which is to make life easier for students of the \"ПКГХ\" college."
        },
        {
          name: "DarkWaterAPI",
          pictures: [
            {
              img: require("./assets/portfolio/darkwaterapi.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Gradle", "Moleculer", "PostgreSQL", "PaperMC"],
          category: "FrameWork",
          visit: "https://gitlab.com/nubilum-development/project-watermelon/DarkWaterAPI",
          description: "Powerful library for creating plugins for Minecraft servers running on PaperMC core."
        },
        {
          name: "ColdySteps",
          pictures: [
            {
              img: require("./assets/portfolio/coldysteps.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "PostgreSQL", "PaperMC"],
          category: "Plugin",
          visit: "https://gitlab.com/nubilum-development/project-watermelon/coldysteps",
          description:
              "Plugin for PaperMC, which adds a cold system in all cold biomes with the ability to fine-tune."
        },
        {
          name: "ThirstForWater",
          pictures: [
            {
              img: require("./assets/portfolio/thirstforwater.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "PostgreSQL", "PaperMC"],
          category: "Plugin",
          visit: "https://gitlab.com/nubilum-development/project-watermelon/ThirstForWaterReload",
          description:
              "Plugin for PaperMC, adding a thirst system with the ability to fine-tune."
        },
        {
          name: "SoulAftermath",
          pictures: [
            {
              img: require("./assets/portfolio/soulaftermath.png")
            }
          ],
          technologies: ["Java", "JOOQ", "Maven", "PostgreSQL", "PaperMC"],
          category: "Plugin",
          description:
              "A plugin for the Minecraft game server \"CloudCraft Instinct\" that adds mission and mana systems."
        }
      ],
    }
  }
});

new Vue({
  created () {
    AOS.init()
  },
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
