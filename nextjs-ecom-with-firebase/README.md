# nextjs-ecom + firebase + canner

Demo of how to use [canner](https://www.canner.io)(CMS) + [nextjs](https://www.nextjs.org/docs)(Site generator) + [firebase](https://www.firebase.com/)(Database).

To build your NextJS apps with Canner CMS, and store and host in Firebase.

## 1. Create a Firebase project

Visit https://firebase.google.com/ and create your new app.

## 2. Setup firebase settings

Download the firebase private key and put in `cert/firebase` folder.

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

## 6. Deploy website

https://www.gatsbyjs.org/docs/deploy-gatsby/
