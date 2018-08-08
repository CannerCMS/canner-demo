# gatsby-blog + prisma + canner
Demo of how to use [canner](https://www.canner.io)(CMS) + [gatsby](https://www.gatsbyjs.org/)(Site generator) + [prisma](https://www.prisma.io/)(Database).

![cover](https://i.imgur.com/zqPONIo.png)

This demo will guide you to create a bazing-fast blog website, built/deploy with Gastby. You can update your articles and authors on Canner and the data will be stored at Prisma.

Let's look at the overview with a simple image below.

![overview](https://i.imgur.com/fb9YSOY.png)

# 0. Before you start
After you clone this repository, there are certain things you need to make sure.
## a. Make sure you install the latest canner cli
```sh
npm install -g @canner/cli@latest 
```

## b. Signup on canner.io
If you haven't signup on canner.io. Please visit [canner](www.canner.io) to create a account.

## c. Make sure you install prisma cli
```sh
npm install -g prisma
```

# 1. Initialize your Prisma project
## a. Create prisma files
```sh
cd cert/prisma

# remove the default prisma files
rm datamodel.graphql prisma.yml

# init prisma project here
prisma init
```

During `prisma init`, if you haven't login to prisma before, you'll have to follow directions on terminal to finish singup. When you come back to the process, please choose `Demo server` for this example. After all the questions, you should expect result like below.

![result](https://i.imgur.com/EE8QQGJ.png)


## b. Update datamodel.graphql
Copy following content and paste to `cert/prisma/datamodel.graphql`
```graphql
type Post {
  id: ID! @unique
  name: String!
  postDate: DateTime!
  content: Json
  author: User
}

type User {
  id: ID! @unique
  name: String!
  email: String!
}
```

## c. Deploy prisma
```sh
# under cert/prisma
prisma deploy
```

After deploying to prisma, you'll see successful result on terminal like below.

![result-2](https://i.imgur.com/B7dr9N5.png)

# 2. Deploy CMS to Canner
For development convenience, you could try your CMS locally, by enter

```sh
# If you're still under cert/prisma, go back to the project folder
canner script:serve
```

Open `http://localhost:9090`, you'll see the CMS user interface connecting to memory storage.

Let's take a look at `canner.schema.js` with `datamodel.graphql` side-by-side.

## a. User
In `datamodel.graphql`, we have a `User` type
```graphql
type User {
  id: ID! @unique
  name: String!
  email: String!
}
```

In order to update the user data on prisma, we need a correspoding schema in `canner.schema.js`

```js
<array
  // keyName should be the same with type name in graphql
  keyName="User"
  title="Blog authors"
  uiParams={{
    columns: [{
      title: 'User name',
      key: 'name',
      dataIndex: 'name'
    }, {
      title: 'User email',
      key: 'email',
      dataIndex: 'email'
    }]
  }}
  ui="tableRoute"
  >
  <string title="User name" keyName="name"/>
  <string title="User email" keyName="email"/>
</array>
```

We can see that we use an `array` tag with two `string` fields (`name` and `email`) as children.

## b. Post
Now, let's see how we constuct schema for `Post`.

```graphql
type Post {
  id: ID! @unique
  name: String!
  postDate: DateTime!
  content: Json
  author: User
}
```

For this `Post` graphql model, we should construct our schema as following.

```js
<array
  keyName="Post"
  title="Blog post"
  uiParams={{
    columns: [{
      title: 'Post name',
      key: 'name',
      dataIndex: 'name'
    }, {
      title: 'Post date',
      key: 'postDate',
      dataIndex: 'postDate'
    }]
  }}
  ui="tableRoute"
  >
  <string title="Post name" keyName="name"/>
  <dateTime title="Post date" keyName="postDate"/>
  <object title="Content" keyName="content" ui="editor"/>
  <relation title="Author" keyName="author" ui="singleSelect"
    relation={{
      to: 'User',
      type: 'toOne'
    }}
    uiParams={{
      textCol: 'name',
      columns: [{
        title: 'name',
        dataIndex: 'name'
      }, {
        title: 'email',
        dataIndex: 'email'
      }]
    }}
  />
</array>
```

Let's take a closer look at `relation` tag.

Since we defined a `User` type at `author` field in the graphql model as a to-one relationship, we need to define the same relationship in `canner.schema.js`.

```js
// closer look at relation
// skip other fields here
<relation title="Author" keyName="author" ui="singleSelect"
  relation={{
    to: 'User',
    // author is a to-one relation to User
    type: 'toOne'
  }}
  uiParams={{
    // use textCol to specify the field you want to display as primary identifier in ui
    textCol: 'name',

    // column will be used to display the table for users to pick user as author
    columns: [{
      title: 'name',
      dataIndex: 'name'
    }, {
      title: 'email',
      dataIndex: 'email'
    }]
  }}
/>
```

## c. Login Canner & create new app
Login Canner & create new app:
```sh
# under project folder
canner login
canner init
```

## d. Deploy your CMS

```sh
# under project folder
canner script:deploy
```

## e. insert some data
Now, please visit your project on canner.io. Then click the `Edit content` on the sidebar.

Try to create a post and a user on this cms, the data will be stored on prisma.

![insert-data](http://g.recordit.co/Axe0r7ko8F.gif)

# 3. Build with gatsby


## 6. Deploy website
https://www.gatsbyjs.org/docs/deploy-gatsby/
