const {imageService} = require('@canner/canner-tools');

module.exports = {
  header: {
    icon: 'cloud',
    title: 'Canner 易開網',
    description: '最完整後台建置平台<br/>讓您專注於前端的介面設計與優化<br/>資料維護、客戶後台、API串接一次解決',
    background: imageService.image('/statics/images/bg.jpg'),
    copy: '易開科技'
  },
  intro: {
    title: '關於易開網',
    content: '我們提供<br/>多樣化的元件，建置最彈性的後台<br/><br/>友善的使用者體驗、彈性的後台設置提供多種元件 可以依照您的需求挑選元件。<br/>除此之外我們還提供圖片處理、伺服器架設、API、Cloud function、權限管理、Cli tools、多平台整合',
    image: imageService.image('/statics/images/pic01.png')
  },
  work: {
    title: '多功能後台',
    content: '為客戶設計一個好用的後台要花非常多的時間，我們讓您可以專注在您最擅長的事情。把後台全部輕易的在 Canner 上解決。',
    image: imageService.image('/statics/images/pic02.png')
  },
  about: {
    title: '我們是誰',
    content: 'Canner 團隊在各領域都有專精技術、不斷追求卓越<br/><br/>友善的使用者體驗、彈性的後台設置提供多種元件讓使用者使用， 可以依照自己的需求挑選最適合的元件。',
    image: imageService.image('/statics/images/pic03.jpg')
  },
  contact: {
    title: '聯絡我們',
    facebook: {link: 'https://www.facebook.com/cannerweb/'},
    github: {link: 'https://www.github.com/canner'},
    twitter: {link: 'https://twitter.com/cannerio'},
    instagram: {link: ''}
  }
}