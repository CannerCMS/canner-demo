/* global LineIt */
import * as React from "react";
import { Row, Col, Tabs, InputNumber, Select, notification, Alert } from "antd";
import ImageGallery from "@canner/react-image-gallery";
// import Editor from '@canner/qa-editor';
import PriceUtils from "../utils/price";
import BgDiv from "../utils/BgDiv";
import Router from "next/router";
import Link from "next/link";
import isUndefined from "lodash/isUndefined";
import FBIcon from "react-icons/lib/fa/facebook-square";
import styled from "styled-components";
import { addCart, plusCartCount, getCart } from "../actions/cart";
import { fromJS } from "immutable";
const TabPane = Tabs.TabPane;
const Option = Select.Option;

import {
  SingleProduct,
  ProductContainer,
  Title,
  Name,
  AddCartBtn,
  BuyBtn,
  Info,
  No,
  Price,
  Input,
  Label,
  BuyInfo,
  RecommandHeader,
  AddBuyContainer,
  AddItem
} from "./styles/singleProduct";

const Heading = styled.div`
  margin-bottom: 1.5rem;

  span:first-child {
    margin-right: 20px;
  }
`;

const warning = msg => {
  notification.warning({
    message: "加入購物車失敗",
    description: msg
  });
};

export default class SingleProductCmp extends React.Component {
  state = {
    count: 1,
    optUndefined: true,
    model: ""
  };

  componentDidMount() {
    if (typeof window !== undefined) {
      LineIt.loadButton();
    }
  }

  addCart = cb => {
    // 再加入購物車前，並需要先確定 variants 有沒有被選擇，
    // 並用 model 儲存 variants 的 options (eg: L-red)
    const carts = fromJS(getCart());
    const { selectedProduct } = this.props;
    const { model, optUndefined, count } = this.state;
    const id = selectedProduct.getIn(["_id"]);
    const productInCart = carts.find(
      cart => cart.get("id") === id && cart.get("model") === model
    );

    const options = selectedProduct.getIn(["variants", "options"]);
    if (optUndefined && options && options.size > 0) {
      warning("尚有選項未正確填寫");
    } else {
      if (productInCart) {
        plusCartCount(id, model, count);
      } else {
        addCart(id, model, count);
      }
      if (cb) cb();
    }
  };

  toOrder = () => {
    this.addCart(() => {
      Router.push(`/productOrder`);
    });
  };

  onChangeCount = val => {
    this.setState({
      count: val
    });
  };

  onChangeVariants = (optName, val) => {
    this.setState(
      {
        [optName]: val
      },
      function() {
        const { products } = this.props;
        const options = products.getIn([0, "variants", "options"]);
        let model = "";
        let optUndefined = false;
        if (options && options.size > 0) {
          model = options
            .map(opt => {
              const val = this.state[opt.get("name")];
              if (isUndefined(val)) {
                optUndefined = true;
              }
              return val;
            })
            .reduce((a, b) => (a === "" ? b : `${a}-${b}`), "");
        }
        this.setState({
          model,
          optUndefined
        });
      }
    );
  };

  render() {
    const { allProduct, selectedProduct, brand, prodId } = this.props;
    const { count, optUndefined, model } = this.state;
    if (!selectedProduct) {
      return (
        <div id="single-product">
          <Alert
            message="找不到此商品"
            description="對不起，我們無法找到您查詢的商品"
            type="warning"
            showIcon
          />
        </div>
      );
    }

    const images = selectedProduct
      .get("photos")
      .map(img => {
        return {
          original: img.getIn(["img", "url"]),
          thumbnail: img.getIn(["img", "url"])
        };
      })
      .toJS();

    // variants 格式
    // variants: {
    //  variants: [
    //    {options: "L", price, promo, ...other}
    //  ],
    //  options: [
    //    {name: "size", values: ["L", "M"]}
    //  ]
    // }
    const productModel = optUndefined
      ? selectedProduct
      : selectedProduct
          .getIn(["variants", "variants"])
          .find(prod => prod.get("options") === model);
    const options = selectedProduct.getIn(["variants", "options"]);
    const url = `https://hanata.com/${brand}Store?prodId=${prodId}`;
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
              <Row>
                <Col span={18}>
                  <Title className="header-2">
                    {selectedProduct.get("name")}
                    <No style={{ marginLeft: "10px" }}>
                      產品編號 | {selectedProduct.get("no")}
                    </No>
                  </Title>
                </Col>
                <Col span={6} style={{ textAlign: "right" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURI(
                      url
                    )}`}
                    className="fb-xfbml-parse-ignore"
                    style={{ marginRight: "5px" }}
                  >
                    <FBIcon
                      style={{ marginBottom: 13 }}
                      size="23"
                      color="#4267b2"
                    />
                  </a>
                  <div
                    style={{ display: "none" }}
                    className="line-it-button"
                    data-lang="zh_Hant"
                    data-type="share-b"
                    data-url={url}
                  />
                </Col>
              </Row>
            </Heading>
            {/* <Editor readOnly state={product.get('description')} style={{marginTop: '30px', fontSize: '14px'}}/> */}
            <ProductContainer>
              <Info>
                <Price>
                  <PriceUtils
                    style={{ display: "inline-block" }}
                    price={productModel.get("price")}
                    promo={productModel.get("promo")}
                    allPromo={selectedProduct.get("allPromo")}
                  />
                </Price>
              </Info>
              <Input>
                <Label>數量</Label>
                <InputNumber
                  style={{ width: 200 }}
                  value={count}
                  size="large"
                  min={1}
                  onChange={this.onChangeCount}
                />
              </Input>
              {options && options.size > 0 ? (
                <div>
                  {options.map(opt => {
                    const optName = opt.get("name");
                    return (
                      <Input key={optName}>
                        <Label>{optName}</Label>
                        <Select
                          style={{ width: 200 }}
                          value={this.state[optName]}
                          onChange={val => this.onChangeVariants(optName, val)}
                        >
                          {opt.get("values").map(val => {
                            return (
                              <Option key={val} value={val}>
                                {val}
                              </Option>
                            );
                          })}
                        </Select>
                      </Input>
                    );
                  })}
                </div>
              ) : null}
              <div>
                <AddCartBtn className="primary-button" onClick={this.addCart}>
                  加入購物車
                </AddCartBtn>
                <BuyBtn className="primary-button" onClick={this.toOrder}>
                  直接購買
                </BuyBtn>
              </div>
            </ProductContainer>
          </Col>
        </Row>
        <BuyInfo>
          <Tabs animated={false}>
            {selectedProduct.get("detail") &&
              selectedProduct.get("detail").map((item, i) => (
                <TabPane tab={item.get("name")} key={`${i}`}>
                  <div>
                    {/* <Editor readOnly state={item.get("content")} /> */}
                  </div>
                </TabPane>
              ))}
            {/* {orderInfo &&
              orderInfo.map((item, i) => (
                <TabPane tab={item.get("name")} key={`${i}`}>
                  <div>
                    <Editor readOnly state={item.get("content")} />
                  </div>
                </TabPane>
              ))} */}
          </Tabs>
        </BuyInfo>
        <div>
          {selectedProduct.get("addBuy") &&
          selectedProduct.get("addBuy").size > 0 ? (
            <RecommandHeader>
              <div className="header-2">推薦商品</div>
              <div className="sub-header line">
                <span>Products</span>
              </div>
            </RecommandHeader>
          ) : null}
          <AddBuyContainer>
            {selectedProduct.get("addBuy") &&
              selectedProduct
                .get("addBuy")
                .keySeq()
                .map(productKey => {
                  const prod = allProduct.find(
                    datum => datum.get("_id") === productKey
                  );
                  let href;

                  if (prod.get("brand") === "SUSS")
                    href = `/sussStore?prodId=${productKey}`;
                  else href = `/hanataStore?prodId=${productKey}`;
                  return (
                    prod && (
                      <AddItem>
                        <Link href={href}>
                          <a>
                            <div>
                              <BgDiv
                                image={prod.getIn([
                                  "photos",
                                  "0",
                                  "img",
                                  "url"
                                ])}
                                style={{
                                  height: "auto",
                                  paddingTop: "100%",
                                  width: "100%"
                                }}
                              />
                            </div>
                            <Name>{prod.get("name")}</Name>
                            <div>
                              <PriceUtils
                                price={prod.get("price")}
                                promo={prod.get("promo")}
                                allPromo={prod.get("allPromo")}
                              />
                            </div>
                          </a>
                        </Link>
                      </AddItem>
                    )
                  );
                })}
          </AddBuyContainer>
        </div>
      </SingleProduct>
    );
  }
}
