const {imageService} = require('@canner/canner-tools');

module.exports = {
  main: {
    title: 'Canner 易開科技',
    description: '最完整後台建置平台<br/>讓您專注於前端的介面設計與優化<br/>資料維護、客戶後台、API串接一次解決',
    image: imageService.image('/statics/images/pic01.jpg')
  },
  first: {
    title: '建置最彈性的後台',
    description: '友善的使用者體驗、彈性的後台設置提供多種元件 可以依照您的需求挑選元件。除此之外我們還提供圖片處理、伺服器架設、API、Cloud function、權限管理、Cli tools、多平台整合',
    image: imageService.image('/statics/images/pic02.jpg')
  },
  second: {
    title: '多功能後台',
    description: '為客戶設計一個好用的後台要花非常多的時間，我們讓您可以專注在您最擅長的事情。把後台全部輕易的在 Canner 上解決。',
    icons: [
      'image',
      'server',
      'code',
      'cloud',
      'users',
      'cogs'
    ]
  }
}