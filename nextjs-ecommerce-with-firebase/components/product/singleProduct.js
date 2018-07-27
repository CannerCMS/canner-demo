import * as React from "react";
import { Row, Col, Tabs, InputNumber, Alert } from "antd";
import ImageGallery from "@canner/react-image-gallery";
// import Editor from '@canner/qa-editor';
import PriceUtils from "../utils/price";
import styled from "styled-components";
import { get } from "lodash";
const TabPane = Tabs.TabPane;

import {
  SingleProduct,
  ProductContainer,
  Title,
  AddCartBtn,
  BuyBtn,
  Info,
  No,
  Price,
  Input,
  Label,
  BuyInfo
} from "./styles/singleProduct";

const Heading = styled.div`
  margin-bottom: 1.5rem;

  span:first-child {
    margin-right: 20px;
  }
`;

export default class SingleProductCmp extends React.Component {
  render() {
    const { selectedProduct } = this.props;
    if (!selectedProduct) {
      return (
        <div>
          <Alert
            message="No product"
            description="Sorry, we can't find your product"
            type="warning"
            showIcon
          />
        </div>
      );
    }

    const images =
      selectedProduct.photos &&
      selectedProduct.photos.map(img => {
        return {
          original: get(img, ["img", "url"]),
          thumbnail: get(img, ["img", "url"])
        };
      });

    return (
      <SingleProduct id="single-product">
        <Row gutter={32}>
          <Col md={12} sm={24}>
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={true}
              useBrowserFullscreen={false}
              lazyLoad={true}
              showBullets={true}
              showNav={false}
              thumbnailPosition="bottom"
            />
          </Col>
          <Col md={12} sm={24}>
            <Heading>
              <Title className="header-2">
                {selectedProduct.name}
                <No style={{ marginLeft: "10px" }}>
                  Product NO. | {selectedProduct.no}
                </No>
              </Title>
            </Heading>
            {/* <Editor readOnly state={product.get('description')} style={{marginTop: '30px', fontSize: '14px'}}/> */}
            <ProductContainer>
              <Info>
                <Price>
                  <PriceUtils
                    style={{ display: "inline-block" }}
                    price={selectedProduct.price}
                    promo={selectedProduct.promo}
                    allPromo={selectedProduct.allPromo}
                  />
                </Price>
              </Info>
              <Input>
                <Label>Amount</Label>
                <InputNumber
                  defaultValue={1}
                  style={{ width: 200 }}
                  size="large"
                  min={1}
                />
              </Input>
              <div>
                <AddCartBtn className="primary-button">Add to cart</AddCartBtn>
                <BuyBtn className="primary-button">Buy</BuyBtn>
              </div>
            </ProductContainer>
          </Col>
        </Row>
        <BuyInfo>
          <Tabs animated={false}>
            {selectedProduct.detail &&
              selectedProduct.detail.map((item, i) => (
                <TabPane tab={item.name} key={`${i}`}>
                  <div>
                    {/* <Editor readOnly state={item.get("content")} /> */}
                  </div>
                </TabPane>
              ))}
          </Tabs>
        </BuyInfo>
      </SingleProduct>
    );
  }
}
