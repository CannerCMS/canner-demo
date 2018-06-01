// use Firebase's Firestore
CannerTypes.endpoint('firebase.firestore.admin', {
  apiKey: "AIzaSyCHvfYW64q145dZJZQylP58pZddn69726o",
  authDomain: "business-card-39b76.firebaseapp.com",
  databaseURL: "https://business-card-39b76.firebaseio.com",
  projectId: "business-card-39b76",
  storageBucket: "business-card-39b76.appspot.com",
  messagingSenderId: "649781327259"
});

const name = CannerTypes.string().title('Name').description('Please enter a name');
const description = CannerTypes.string().title('Description').description('Enter description of yourself').ui('editor');
const thumb = CannerTypes.string().title('Your thumb').description('Upload your thumb').ui('image');
const bg = CannerTypes.string().title('Background').description('Background of your profile').ui('image');
const twitter = CannerTypes.string().title('Twitter').description('Twitter account').ui('link');
const facebook = CannerTypes.string().title('Facebook').description('Facebook account').ui('link');
const instagram = CannerTypes.string().title('Instagram').description('Instagram account').ui('link');

const main = CannerTypes.object({
  name,
  description,
  twitter,
  facebook,
  instagram,
  thumb,
  bg
}).description('Main page');

module.exports = {main};