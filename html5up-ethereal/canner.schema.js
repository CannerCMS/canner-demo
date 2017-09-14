const mainTitle = CannerTypes.string().description('網站標題');
const mainDescription = CannerTypes.string().description('網站敘述').ui('editor');
const mainImage = CannerTypes.string().ui('image').description('首頁圖片');

const main = CannerTypes.object({
  title: mainTitle,
  description: mainDescription,
  image: mainImage
}).description('首頁主設定');

// first section
const firstTitle = CannerTypes.string().description('網站標題');
const firstDescription = CannerTypes.string().description('敘述').ui('editor');
const firstImage = CannerTypes.string().ui('image').description('圖片');

const first = CannerTypes.object({
  title: firstTitle,
  description: firstDescription,
  image: firstImage
}).description('第一次頁');

// second section
const secondTitle = CannerTypes.string().description('網站標題');
const secondDescription = CannerTypes.string().description('敘述').ui('editor');
const secondIcon = CannerTypes.string().description('Icon (使用 fontAwesome，請入其值）');

const second = CannerTypes.object({
  title: secondTitle,
  description: secondDescription,
  icons: CannerTypes.array({icon: secondIcon})
}).description('第二次頁');

// third section
const thirdTitle = CannerTypes.string().description('網站標題');
const thirdDescription = CannerTypes.string().description('敘述').ui('editor');
const thirdImage = CannerTypes.string().ui('image').description('圖片');

const third = CannerTypes.object({
  title: thirdTitle,
  description: thirdDescription,
  image: thirdImage
}).description('第三次頁');

// contact
const contactTitle = CannerTypes.string().description('聯絡我們標題');
const contactDescription = CannerTypes.string().description('聯絡我們敘述').ui('editor');
const contactFacebook = CannerTypes.object({
  id: CannerTypes.string().description('你的 Facebook ID'),
  link: CannerTypes.string().ui('link').description('你的 Facebook 網址')
});

const contactTwitter = CannerTypes.object({
  id: CannerTypes.string().description('你的 Twitter ID'),
  link: CannerTypes.string().ui('link').description('你的 Twitter 網址')
});

const contactInstagram = CannerTypes.object({
  id: CannerTypes.string().description('你的 Instagram ID'),
  link: CannerTypes.string().ui('link').description('你的 Instagram 網址')
});

const contactMedium = CannerTypes.object({
  id: CannerTypes.string().description('你的 Medium ID'),
  link: CannerTypes.string().ui('link').description('你的 Medium 網址')
});

const contact = CannerTypes.object({
  title: contactTitle,
  description: contactDescription,
  facebook: contactFacebook,
  twitter: contactTwitter,
  instagram: contactInstagram,
  medium: contactMedium,
  copy: CannerTypes.string().description('Copyright')
}).description('聯絡我們');

module.exports = {main, first, second, third, contact};