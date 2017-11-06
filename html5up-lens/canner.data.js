const {imageService} = require('@canner/cli');

module.exports = {
  "main": {
    "title": "Canner 範例",
    "description": "這個範例是使用 Canner 後台架設，讓你能夠用快速建立任何網站的後台系統",
    "twitter": "https://twitter.com/cannerio",
    "github": "https://github.com/Canner",
    "instagram": "#",
    "email": "emailto:contact@canner.io",
    "copy": "Canner 易開網"
  },
  "photos": [
    {
      "image": imageService.image("/statics/images/fulls/01.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/01.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "image": imageService.image("/statics/images/fulls/02.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/02.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "image": imageService.image("/statics/images/fulls/03.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/03.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "image": imageService.image("/statics/images/fulls/04.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/04.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "image": imageService.image("/statics/images/fulls/05.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/05.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "image": imageService.image("/statics/images/fulls/06.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/06.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      "image": imageService.image("/statics/images/fulls/07.jpg"),
      "thumb": imageService.image("/statics/images/thumbs/07.jpg"),
      "imgTitle": "Diam tempus accumsan",
      "imgDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
}