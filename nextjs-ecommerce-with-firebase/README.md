# NextJS-ecommerce + Firebase + Canner

Demo of how to use [Canner](https://www.canner.io)(CMS) + [NextJS](https://nextjs.org/docs/#setup)(SSR site generator) + [Firebase](https://www.firebase.com/)(Database).

To build your NextJS apps with Canner CMS, and store & host in Firebase.

## 1. Create a Firebase project

Visit https://firebase.google.com/ and create your new app.

## 2. Setup Firebase settings

Download the Firebase private key and put in `cert/firebase` folder.

Go to Project settings > Service accounts > Generate new private key

![img](https://www.canner.io/img/firebasesdk.gif)

Update `./firebaseConfig.js` with your settings.

And select your project in command.

```
firebase use <firebase project ID>
```

## 3. Deploy your Firebase hosting

```
$ npm run deploy
```

## 4. Serve your Canner CMS & website locally

Install Canner globally:

```
npm i -g @canner/cli
```

You could try your CMS locally, by enter

```
canner script:serve
```

open `http://localhost:9090`

```
npm run dev
```

## 5. Deploy to Canner

Login Canner & create new app:

```
$ canner login
$ canner init
```

Deploy your CMS

```
$ canner script:deploy
```
