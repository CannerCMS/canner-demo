/** @jsx builder */

import builder from "canner-script";

const Store = ({ attributes }) => (
  <array
    keyName="bannerBg"
    storage={attributes.storage}
    uiParams={{
      columns: [
        {
          title: "Img",
          dataIndex: "img"
        }
      ]
    }}
  >
    <image keyName="img" />
  </array>
);

export default Store;
