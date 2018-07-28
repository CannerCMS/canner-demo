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
      ]
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string keyName="name" title="Name" required />
    <string keyName="url" title="Display Name on Url" required />
  </array>
);

export default Categories;
