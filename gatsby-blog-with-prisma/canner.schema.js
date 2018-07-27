/** @jsx builder */
import builder from 'canner-script';
import {PrismaClient} from 'canner-graphql-interface';

// contruct graphQL client
const graphqlClient = new PrismaClient();

export default (
  <root graphqlClient={graphqlClient}>
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

    <array
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
  </root>
)
