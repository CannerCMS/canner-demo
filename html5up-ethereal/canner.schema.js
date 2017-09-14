const mainTitle = CannerTypes.string().description('網站標題');
const mainDescription = CannerTypes.string().description('網站敘述').ui('editor');
const mainImage = CannerTypes.string().description('首頁圖片');

const main = CannerTypes.object({
  title: mainTitle,
  description: mainDescription,
  image: mainImage
}).description('首頁主設定');

// first section
const firstTitle = CannerTypes.string().description('網站標題');
const firstDescription = CannerTypes.string().description('敘述').ui('editor');
const firstImage = CannerTypes.string().description('圖片');

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
  icons: CannerTypes.array(secondIcon)
}).description('第二次頁');

module.exports = {main, first, second};