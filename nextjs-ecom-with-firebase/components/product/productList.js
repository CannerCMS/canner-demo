import * as React from "react";
import { Row, Col, notification, Modal, Select, InputNumber } from "antd";
import PriceUtils from "../utils/price";
import BgDiv from "../utils/BgDiv";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import AddCart from "react-icons/lib/fa/cart-plus";
import BuyCart from "react-icons/lib/fa/cart-arrow-down";
import isUndefined from "lodash/isUndefined";
import { fromJS } from "immutable";
import Router from "next/router";
import { getCart, addCart, plusCartCount } from "../actions/cart";

import {
  ProductListWrapper,
  Item,
  Title,
  Price,
  Img,
  Label,
  Input,
  HoverWrapper
} from "./styles/productList";

const Option = Select.Option;

const warning = msg => {
  notification.warning({
    message: "加入購物車失敗",
    description: msg
  });
};

export default class ProductList extends React.Component {
  state = {
    count: 1,
    optUndefined: true,
    modalVis: false,
    product: null,
    action: "",
    model: ""
  };

  onOk = () => {
    const { action } = this.state;
    if (action === "add") {
      this.addCart(() => {});
    } else {
      this.toOrder();
    }
    this.closeModal();
  };

  closeModal = () => {
    this.setState({
      modalVis: false
    });
  };

  openModal = (product, action) => {
    this.setState(
      {
        count: 1,
        optUndefined: true,
        modalVis: true,
        product,
        action,
        model: ""
      },
      function() {
        // reset all variants select value
        const { product } = this.state;
        const options = product.getIn(["variants", "options"]);
        if (options && options.size > 0) {
          options.forEach(opt => {
            this.setState({
              [opt.get("name")]: undefined
            });
          });
        }
      }
    );
  };

  changeCount = val => {
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
        const { product } = this.state;
        const options = product.getIn(["variants", "options"]);
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

  addCart = cb => {
    // 再加入購物車前，並需要先確定 variants 有沒有被選擇，
    // 並用 model 儲存 variants 的 options (eg: L-red)
    const carts = fromJS(getCart());
    const { product, model, optUndefined, count } = this.state;
    const id = product.getIn(["_id"]);
    const productInCart = carts.find(
      cart => cart.get("id") === id && cart.get("model") === model
    );

    const options = product.getIn(["variants", "options"]);
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

  render() {
    const { count, product, modalVis } = this.state;
    const options = product && product.getIn(["variants", "options"]);
    const { products, brand } = this.props;
    return (
      <ProductListWrapper>
        <Row gutter={24}>
          {products.map((product, i) => {
            return (
              <Col md={8} sm={12} xs={12} key={i}>
                <Item>
                  <Link
                    href={`/${
                      brand === "SUSS" ? "sussStore" : "hanataStore"
                    }?prodId=${product.get("_id")}`}
                  >
                    <a>
                      <div
                        style={{
                          height: "auto",
                          width: "100%",
                          overflow: "hidden"
                        }}
                      >
                        <LazyLoad offset={200} height={250}>
                          <Img>
                            <BgDiv
                              image={product.getIn(["photos", 0, "img", "url"])}
                              style={{
                                paddingTop: "100%",
                                height: "auto",
                                width: "100%",
                                position: "relative"
                              }}
                            >
                              <HoverWrapper className="hoverWrapper">
                                <div
                                  className="button"
                                  onClick={e => {
                                    e.preventDefault();
                                    this.openModal(product, "add");
                                  }}
                                >
                                  <AddCart className="add-cart" />
                                </div>
                                <div
                                  className="button"
                                  onClick={e => {
                                    e.preventDefault();
                                    this.openModal(product, "buy");
                                  }}
                                >
                                  <BuyCart className="buy-cart" />
                                </div>
                              </HoverWrapper>
                            </BgDiv>
                          </Img>
                        </LazyLoad>
                      </div>
                      <Title>{product.get("name")}</Title>
                      <Price>
                        <PriceUtils
                          price={product.get("price")}
                          promo={product.get("promo")}
                          allPromo={product.get("allPromo")}
                        />
                      </Price>
                    </a>
                  </Link>
                </Item>
              </Col>
            );
          })}
        </Row>
        <Modal
          visible={modalVis}
          onOk={this.onOk}
          title="選擇數量"
          okText="確認"
          cancelText="取消"
          onCancel={this.closeModal}
        >
          {options &&
            options.size > 0 && (
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
            )}
          <Label>數量</Label>
          <InputNumber
            style={{ width: 200 }}
            value={count}
            size="large"
            min={1}
            onChange={this.changeCount}
          />
        </Modal>
      </ProductListWrapper>
    );
  }
}
