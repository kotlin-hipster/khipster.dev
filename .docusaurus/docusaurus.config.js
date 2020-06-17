export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "announcementBar": {
      "id": "supportus",
      "content": "⭐️ If you like KHipster, give it a star on <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/jhipster/jhipster-kotlin\">GitHub</a>! ⭐️"
    },
    "navbar": {
      "title": "KHipster",
      "logo": {
        "alt": "KHipster Logo",
        "src": "img/khip.svg"
      },
      "links": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/jhipster/jhipster-kotlin",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/khipster"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/sendilkumarn"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "href": "https://dev.to/sendilkumarn/kotlin-hipster-spring-boot-kotlin-4956"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/jhipster/jhipster-kotlin"
            }
          ]
        },
        {
          "title": "Contributions",
          "items": [
            {
              "label": "GitHub Sponsors",
              "href": "https://github.com/sponsors/sendilkumarn"
            },
            {
              "label": "Open Collective",
              "href": "https://opencollective.com/generator-jhipster"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Sendilkumarn. Built with Docusaurus."
    }
  },
  "title": "KHipster",
  "tagline": "Set up a modern Full Stack web app by running a single command.",
  "url": "https://khipster.dev",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "sendilkumarn",
  "projectName": "khipster.dev",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "gettingStarted",
          "sidebarPath": "/Users/sendilkumarn/Dev/khipster.dev/sidebars.js",
          "editUrl": "https://github.com/sendilkumarn/khipster.dev/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/sendilkumarn/Dev/khipster.dev/src/css/custom.css"
        }
      }
    ]
  ]
};