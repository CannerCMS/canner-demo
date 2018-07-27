/** @jsx builder */
/* eslint-disable react/prop-types */

import builder from "canner-script";

const Categories = ({ attributes }) => (
  <array
    keyName="category"
    title="Category"
    hide={true}
    storage={attributes.storage}
    uiParams={{
      columns: [
        {
          title: "Name",
          dataIndex: "name"
        }
        // , {
        //   title: 'Parent Category',
        //   dataIndex: 'parent.name'
        // }
      ]
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="name" title="Name" />
    <string keyName="url" title="Url" ui="link" />
    {/* <relation keyName="parent"
      title="Parent category"
      relation={{
        type: 'toOne',
        to: 'category'
      }}
      uiParams={{
        textCol: "name",
        columns: [{
          title: 'Title',
          dataIndex: 'name'
        }]
      }}
    /> */}
  </array>
);

export default Categories;
