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
      <string title="Post name" keyName="name" required />
      <dateTime title="Post date" keyName="postDate" required />
      <object title="Content" keyName="content" ui="editor"
        validation={{
          validator: (data, reject) => {
            data = data.toJS();
            if (!data.html || data.html.length === 0) {
              return reject('require content');
            }
          }
        }}
      />
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
      <string title="User name" keyName="name" required validation={{pattern: '^[a-zA-Z0-9]{4,10}$'}} />
      <string title="User email" keyName="email" required validation={{format: 'email'}} />
    </array>
  </root>
)
