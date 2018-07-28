/** @jsx builder */
/* eslint-disable react/prop-types */

import builder from "canner-script";

const Shipments = ({ attributes }) => (
  <array
    keyName="shipments"
    storage={attributes.storage}
    title="Shipment settings"
    uiParams={{
      columns: [
        {
          title: "Name",
          dataIndex: "name"
        },
        {
          title: "Shipment method",
          dataIndex: "way"
        }
      ]
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <string
      keyName="way"
      title="Method"
      uiParams={{
        options: [
          {
            text: "FedEx",
            value: "FedEx"
          },
          {
            text: "Mailing",
            value: "Mailing"
          },
          {
            text: "In person",
            value: "In person"
          }
        ]
      }}
      ui="select"
    />
    <string keyName="name" title="Name" />
    <object keyName="description" ui="editor" title="Description" />
  </array>
);

export default Shipments;
