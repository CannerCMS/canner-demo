# HTML5Up-ethereal canner demo

> This project use Firebase realtime database, learn more: https://docs.canner.io/docs/start-quick-firebase.html

and enable `Anonymous` login in `Authentication -> Sign-in method`.

## Steps

#### 1. Create a new project at Firebase
#### 2. Install [Firebase Tool](https://github.com/firebase/firebase-tools)
#### 3. Install `@canner/cli`

```
npm i -g @canner/cli
```

#### 4. Create project at Canner
#### 5. Update `public/index.html` & `canner.connector.js` Firebase config.


**index.html**

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

and **canner.schema.js**

```js
const myDefultConnector = new FirebaseRtdbAdminConnector({
  projectId: "<Project ID>"
});
```

#### 6. Download firebase private key

go to "settings > service account" download private key, and put it in `cert/firebase` folder.

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

#### 9. Enable email feature

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