CannerTypes.endpoint('firebase', {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID"
})

const title = CannerTypes.string().title('Website title').description('Please enter a title of your website');
const description = CannerTypes.string().title('Description').description('Enter description of your website').ui('editor');
const twitter = CannerTypes.string().title('Twitter').description('Twitter account').ui('link');
const github = CannerTypes.string().title('Github').description('Github account').ui('link');
const instagram = CannerTypes.string().title('Instagram').description('Instagram account').ui('link');
const email = CannerTypes.string().title('Email').description('Enter your Email here').ui('link');
const copy = CannerTypes.string().title('Copyright').description('What is your copyright?');
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
const image = CannerTypes.string().title('Main image').description('Original image in your gallery').ui('image');
const thumb = CannerTypes.string().description('Thumb image').description('Thumb image in your gallery').ui('image');
const imgTitle = CannerTypes.string().description('Image title');
const imgDescription = CannerTypes.string().description('Image description');
const photos = CannerTypes.array({
  image,
  thumb,
  imgTitle,
  imgDescription
}).description('Gallery');

module.exports = {main, photos};