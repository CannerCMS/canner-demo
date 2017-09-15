const icon = CannerTypes.string().description('網站 icon');
const title = CannerTypes.string().description('網站標題');
const description = CannerTypes.string().ui('editor').description('網站敘述');
const background = CannerTypes.string().ui('image').uiParams({service: 'canner'}).description('網站背景');
const copy = CannerTypes.string().description('Copyright');

const header = CannerTypes.object({
  icon,
  title,
  description,
  background,
  copy
}).description('主網站');

// intro
const introTitle = CannerTypes.string().description('簡介標題');
const introContent = CannerTypes.string().ui('editor').description('簡介內容');
const introImage = CannerTypes.string().ui('image').uiParams({service: 'canner'}).description('簡介圖片');

const intro = CannerTypes.object({
  title: introTitle,
  content: introContent,
  image: introImage
}).description('簡介頁面');

// work
const workTitle = CannerTypes.string().description('工作標題');
const workContent = CannerTypes.string().ui('editor').description('工作內容');
const workImage = CannerTypes.string().ui('image').uiParams({service: 'canner'}).description('工作圖片');

const work = CannerTypes.object({
  title: workTitle,
  content: workContent,
  image: workImage
}).description('工作頁面');

// about
const aboutTitle = CannerTypes.string().description('關於標題');
const aboutContent = CannerTypes.string().ui('editor').description('關於內容');
const aboutImage = CannerTypes.string().ui('image').uiParams({service: 'canner'}).description('關於圖片');

const about = CannerTypes.object({
  title: aboutTitle,
  content: aboutContent,
  image: aboutImage
}).description('關於頁面');

// contact
const contactTitle = CannerTypes.string().description('聯絡我標題');

const contactFacebook = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('你的 Facebook 網址')
});

const contactTwitter = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('你的 Twitter 網址')
});

const contactInstagram = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('你的 Instagram 網址')
});

const contactGithub = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('你的 Github 網址')
});

const contact = CannerTypes.object({
  title: contactTitle,
  facebook: contactFacebook,
  twitter: contactTwitter,
  instagram: contactInstagram,
  github: contactGithub
}).description('聯絡我頁面');


module.exports = {header, intro, work, about, contact};