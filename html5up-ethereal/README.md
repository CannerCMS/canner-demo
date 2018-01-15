# HTML5Up-ethereal canner demo

## Steps

#### 1. Create a new project at Firebase
#### 2. Install [Firebase Tool](https://github.com/firebase/firebase-tools)
#### 3. Enable Anonymous login at your Firebase project
#### 4. Install `@canner/cli`

```
npm i -g @canner/cli
```

#### 5. Create project at Canner
#### 6. Update `public/index.html` & `canner.schema.js` Firebase config.

```js
  var config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
  };
```

#### 7. Deploy your website on [Firebase hosting](https://firebase.google.com/docs/hosting/)

Select project

```
  firebase init
```

Deploy host

```
  firebase deploy
```

#### 8. Deploy your data to Firebase, and schema to Canner through Canner cli tool.

Deploy schema

```
  canner schema:deploy
```

Import data

```
  canner data:import
```
### Credits:

	Demo Images:
		Unsplash (unsplash.com)

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		Misc. Sass functions (@HugoGiraudel)
		normalizeWheel (@miorel + @pieterv of Facebook)
		Skel (skel.io)