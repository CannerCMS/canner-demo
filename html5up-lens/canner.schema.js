const title = CannerTypes.string().description('Website title');
const description = CannerTypes.string().description('Website description').ui('editor');
const twitter = CannerTypes.string().description('Twitter account').ui('link');
const github = CannerTypes.string().description('Github account').ui('link');
const instagram = CannerTypes.string().description('Instagram account').ui('link');
const email = CannerTypes.string().description('Email').ui('link');
const copy = CannerTypes.string().description('Copyright');
const main = CannerTypes.object({
  title,
  description,
  twitter,
  github,
  instagram,
  email,
  copy
}).description('Main page');

// images
const image = CannerTypes.string().description('Main image').ui('image').uiParams({service: 'canner'});
const thumb = CannerTypes.string().description('Thumb image').ui('image').uiParams({service: 'canner'});
const imgTitle = CannerTypes.string().description('Image title');
const imgDescription = CannerTypes.string().description('Image description');
const photos = CannerTypes.array({
  image,
  thumb,
  imgTitle,
  imgDescription
}).description('Gallery');

module.exports = {main, photos};