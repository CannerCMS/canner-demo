/** @jsx builder */
/* eslint-disable react/prop-types */
import builder, { Default, Tabs, Block } from "canner-script";

const Orders = ({ attributes }) => (
  <array
    ui="tableRoute"
    storage={attributes.storage}
    keyName="orders"
    title="Order"
    uiParams={{
      columns: [
        {
          title: "Create date",
          dataIndex: "createDate"
        },
        {
          title: "Buyer name",
          dataIndex: "orderInfo.buyerName"
        },
        {
          title: "Email",
          dataIndex: "orderInfo.buyerEmail"
        }
      ]
    }}
  >
    <toolbar>
      <pagination />
    </toolbar>
    <Block title="Order NO">
      <string keyName="no" />
    </Block>
    <Tabs>
      <Default title="Purchase information" keyName="purchase">
        <dateTime keyName="createDate" title="Create date" />
        <object keyName="orderInfo">
          <string keyName="buyerName" title="Buyer name" />
          <string keyName="buyerPhone" title="Buyer phone" />
          <string keyName="buyerEmail" title="Buyer Email" />
          <string keyName="shipmentWay" title="Shipment method" />
          <string keyName="receiverName" title="Receiver name" />
          <string keyName="receiverPhone" title="Receiver phone" />
          <string keyName="receiverAddress" title="Receiver address" />
          <dateTime keyName="receiveDate" title="Arrival date" />
          <string ui="time" keyName="receiveTime" title="Arrival time" />
        </object>
      </Default>
      <array
        keyName="detail"
        title="Purchase Items"
        uiParams={{
          columns: [
            {
              title: "Product No",
              dataIndex: "no"
            },
            {
              title: "Product name",
              dataIndex: "name"
            },
            {
              title: "Price",
              dataIndex: "price"
            },
            {
              title: "Promo price",
              dataIndex: "promo"
            },
            {
              title: "Amount",
              dataIndex: "count"
            }
          ]
        }}
      >
        <string keyName="no" title="Product No" />
        <string keyName="name" title="Product name" />
        <number keyName="price" title="Price" />
        <number keyName="promo" title="Promo price" />
        <number keyName="count" title="Amount" />
      </array>
      <Default title="Order Status" keyName="orderStatus">
        <string
          keyName="orderStatus"
          title="status"
          ui="select"
          uiParams={{
            options: [
              {
                text: "New Order",
                value: "new"
              },
              {
                text: "Old Order",
                value: "old"
              }
            ]
          }}
        />
        <string keyName="paymentType" title="Pay method" />
        <string
          keyName="payStatus"
          title="Pay status"
          ui="select"
          uiParams={{
            options: [
              {
                text: "Unpaid",
                value: "not"
              },
              {
                text: "Paid",
                value: "paid"
              }
            ]
          }}
        />
        <string
          keyName="shipStatus"
          title="Shipment status"
          ui="select"
          uiParams={{
            options: [
              {
                text: "In stock",
                value: "not"
              },
              {
                text: "shipping",
                value: "shipping"
              },
              {
                text: "Arrival",
                value: "shipped"
              }
            ]
          }}
        />
      </Default>
      <Default title="Other information" keyName="otherInfomation">
        <number keyName="shipFee" title="Shipment fee" />
        <number keyName="result" title="Total fee" />
      </Default>
    </Tabs>
  </array>
);

export default Orders;
