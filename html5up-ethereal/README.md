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

#### 7. Download firebase private key

go to "settings > service account" download private key, and put it in `cert` folder.

#### 8. Deploy your website on [Firebase hosting](https://firebase.google.com/docs/hosting/)

Select project

```
  firebase init
```

Deploy host

```
  firebase deploy
```

#### 9. Deploy your data to Firebase, and schema to Canner through Canner cli tool.

Deploy schema

```
  canner schema:deploy
```

Import data

```
  canner data:import
```

#### 10. Enable email feature

You are able to use email feature, using Firebase cloud-function.

If you use gmail, you should enable some features see step 7 [here](https://github.com/firebase/functions-samples/tree/master/quickstarts/email-users#setting-up-the-sample)

```
firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"
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