/** @jsx builder */
/* eslint-disable react/prop-types */

import builder, { Tabs, Default } from "canner-script";
import { renderPrice } from "./utils";

const Products = ({ attributes }) => (
  <array
    keyName="product"
    ui="table"
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
          dataIndex: "price",
          render: renderPrice
        },
        {
         title: 'Category',
         dataIndex: 'category.name'
        }
      ]
    }}
  >
    <toolbar>
      <pagination />
      <filter
        fields={[{
          label: 'Brand',
          type: 'select',
          options: [{
            text: 'All',
            condition: {
            }
          }, {
            text: 'HANATA',
            condition: {
              brand: {
                eq: 'HANATA'
              }
            }
          }, {
            text: 'SUSS',
            condition: {
              brand: {
                eq: 'SUSS'
              }
            }
          }]
        }]}
      />
    </toolbar>
    <Tabs>
      <Default title="Basic settings" keyName="basic">
        <string keyName="no" title="NO" required />
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
          required
        />
        <string keyName="name" title="Product name" required />
        <number keyName="price" title="Price" required />
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
      </Default>
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
        <string keyName="name" title="Name" required />
        <object
          keyName="content"
          ui="editor"
          title="Content"
          validation={
            {
              validator: (content, reject) => {
               content = content.toJS();
               if (!content || content.html.length === 0) {
                 return reject('should be required');
               }
              }
            }
          }
        />
      </array>
      <array ui="gallery" keyName="photos" title="Product Gallery" />
    </Tabs>
  </array>
);

export default Products;
