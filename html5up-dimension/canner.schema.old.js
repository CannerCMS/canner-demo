CannerTypes.endpoint('firebase', {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  databaseURL: "DATABASE_URL",
  projectId: "PROJECT_ID",
  storageBucket: "STORAGE_BUCKET",
  messagingSenderId: "MESSAGING_SENDER_ID"
});

const icon = CannerTypes.string().description('Website icon');
const title = CannerTypes.string().description('Website title');
const description = CannerTypes.string().ui('editor').description('description');
const background = CannerTypes.string().ui('image').description('Background image');
const copy = CannerTypes.string().description('Copyright');

const header = CannerTypes.object({
  icon,
  title,
  description,
  background,
  copy
}).description('Main page');

// intro
const introTitle = CannerTypes.string().description('Intro title');
const introContent = CannerTypes.string().ui('editor').description('Intro content');
const introImage = CannerTypes.string().ui('image').description('Intro image');

const intro = CannerTypes.object({
  title: introTitle,
  content: introContent,
  image: introImage
}).description('Introduction page');

// work
const workTitle = CannerTypes.string().description('Work title');
const workContent = CannerTypes.string().ui('editor').description('Work content');
const workImage = CannerTypes.string().ui('image').description('Work image');

const work = CannerTypes.object({
  title: workTitle,
  content: workContent,
  image: workImage
}).description('Work page');

// about
const aboutTitle = CannerTypes.string().description('About title');
const aboutContent = CannerTypes.string().ui('editor').description('About content');
const aboutImage = CannerTypes.string().ui('image').description('About image');

const about = CannerTypes.object({
  title: aboutTitle,
  content: aboutContent,
  image: aboutImage
}).description('About page');

// contact
const contactTitle = CannerTypes.string().description('Contact me title');

const contactFacebook = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('Your Facebook address')
});

const contactTwitter = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('Your Twitter address')
});

const contactInstagram = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('Your Instagram address')
});

const contactGithub = CannerTypes.object({
  link: CannerTypes.string().ui('link').description('Your Github address')
});

const contact = CannerTypes.object({
  title: contactTitle,
  facebook: contactFacebook,
  twitter: contactTwitter,
  instagram: contactInstagram,
  github: contactGithub
}).description('Contact me');


module.exports = {header, intro, work, about, contact};