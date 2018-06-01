CannerTypes.endpoint('firebase', {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID"
});

const mainTitle = CannerTypes.string().description('Enter your website title');
const mainDescription = CannerTypes.string().description('Enter your description').ui('editor');
const mainImage = CannerTypes.string().ui('image').description('Landing page image');

const main = CannerTypes.object({
  title: mainTitle,
  description: mainDescription,
  image: mainImage
}).description('Main settings');

// first section
const firstTitle = CannerTypes.string().description('First section title');
const firstDescription = CannerTypes.string().description('First section description').ui('editor');
const firstImage = CannerTypes.string().ui('image').description('First section image');

const first = CannerTypes.object({
  title: firstTitle,
  description: firstDescription,
  image: firstImage
}).description('First section page');

// second section
const secondTitle = CannerTypes.string().description('Second section title');
const secondDescription = CannerTypes.string().description('Second section description').ui('editor');
const secondIcon = CannerTypes.string().description('Icon (please enter a font-awesome id)');

const second = CannerTypes.object({
  title: secondTitle,
  description: secondDescription,
  icons: CannerTypes.array({icon: secondIcon})
}).description('Second section page');

// third section
const thirdTitle = CannerTypes.string().description('Third section title');
const thirdDescription = CannerTypes.string().description('Third section description').ui('editor');
const thirdImage = CannerTypes.string().ui('image').description('Third section image');

const third = CannerTypes.object({
  title: thirdTitle,
  description: thirdDescription,
  image: thirdImage
}).description('Third section page');

// contact
const contactTitle = CannerTypes.string().description('Contact us title');
const contactDescription = CannerTypes.string().description('Contact us description').ui('editor');
const contactFacebook = CannerTypes.object({
  id: CannerTypes.string().description('Your Facebook ID'),
  link: CannerTypes.string().ui('link').description('Your Facebook address')
});

const contactTwitter = CannerTypes.object({
  id: CannerTypes.string().description('Your Twitter ID'),
  link: CannerTypes.string().ui('link').description('Your Twitter address')
});

const contactInstagram = CannerTypes.object({
  id: CannerTypes.string().description('Your Instagram ID'),
  link: CannerTypes.string().ui('link').description('Your Instagram address')
});

const contactMedium = CannerTypes.object({
  id: CannerTypes.string().description('Your Medium ID'),
  link: CannerTypes.string().ui('link').description('Your Medium address')
});

const contact = CannerTypes.object({
  title: contactTitle,
  description: contactDescription,
  facebook: contactFacebook,
  twitter: contactTwitter,
  instagram: contactInstagram,
  medium: contactMedium,
  copy: CannerTypes.string().description('Copyright')
}).description('Contact me');

module.exports = {main, first, second, third, contact};