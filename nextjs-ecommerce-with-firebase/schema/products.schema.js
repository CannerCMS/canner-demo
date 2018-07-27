/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, { Tabs, Default } from "canner-script";

const Products = ({ attributes }) => (
  <array
    keyName="product"
    ui="tableRoute"
    storage={attributes.storage}
    title="Product"
    uiParams={{
      columns: [
        {
          title: "Name",
          dataIndex: "name"
        },
        {
          title: "Description",
          dataIndex: "description"
        },
        {
          title: "Price",
          dataIndex: "price"
        }
      ]
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    {/* <Tabs> */}
    {/* <Default title="Basic settings" keyName="basic"> */}
    <string keyName="no" title="NO" />
    <string
      keyName="brand"
      title="Brand"
      ui="select"
      uiParams={{
        options: [
          {
            text: "HANATA",
            value: "HANATA"
          },
          {
            text: "SUSS",
            value: "SUSS"
          }
        ]
      }}
    />
    <string keyName="name" title="Product name" />
    <relation
      keyName="category"
      title="Category"
      relation={{
        type: "toOne",
        to: "category"
      }}
      uiParams={{
        textCol: "name",
        columns: [
          {
            title: "Title",
            dataIndex: "name"
          }
        ]
      }}
    />
    <object keyName="description" ui="editor" title="Product description" />

    {/* </Default> */}
    <array
      keyName="detail"
      title="Other details"
      ui="table"
      uiParams={{
        columns: [
          {
            title: "Name",
            dataIndex: "name"
          }
        ]
      }}
    >
      <string keyName="name" title="Name" />
      <object keyName="content" ui="editor" title="Content" />
    </array>
    <array ui="gallery" keyName="photos" title="Product Gallery" />
    {/* </Tabs> */}
  </array>
);

export default Products;
