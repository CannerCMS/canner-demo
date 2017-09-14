const title = CannerTypes.string().description('網站標題');
const description = CannerTypes.string().description('網站敘述').ui('editor');
const twitter = CannerTypes.string().description('Twitter 帳號').ui('link');
const github = CannerTypes.string().description('Github 帳號').ui('link');
const instagram = CannerTypes.string().description('Instagram 帳號').ui('link');
const email = CannerTypes.string().description('Email').ui('link');
const main = CannerTypes.object({
  title,
  description,
  twitter,
  github,
  instagram,
  email
}).description('主設定');

// images
const image = CannerTypes.string().description('大圖片').ui('image').uiParams({service: 'canner'});
const thumb = CannerTypes.string().description('大頭照圖片（小圖）').ui('image').uiParams({service: 'canner'});
const imgTitle = CannerTypes.string().description('圖片標題');
const imgDescription = CannerTypes.string().description('圖片敘述');
const photos = CannerTypes.array({
  image,
  thumb,
  imgTitle,
  imgDescription
}).description('相片集');

module.exports = {main, photos};