import * as React from "react";
import { Row, Col } from "antd";
import PriceUtils from "../utils/price";
import BgDiv from "../utils/BgDiv";
import Link from "next/link";
import { get } from "lodash";

import {
  ProductListWrapper,
  Item,
  Title,
  Price,
  Img
} from "./styles/productList";

export default class ProductList extends React.Component {
  render() {
    const { products, pathname } = this.props;
    return (
      <ProductListWrapper>
        <Row gutter={24}>
          {products.map((product, i) => {
            return (
              <Col md={8} sm={12} xs={12} key={i}>
                <Item>
                  <Link href={`${pathname}?prodId=${product._id}`}>
                    <a>
                      <div
                        style={{
                          height: "auto",
                          width: "100%",
                          overflow: "hidden"
                        }}
                      >
                        <Img>
                          <BgDiv
                            image={get(product, ["photos", 0, "img", "url"])}
                            style={{
                              paddingTop: "100%",
                              height: "auto",
                              width: "100%",
                              position: "relative"
                            }}
                          />
                        </Img>
                      </div>
                      <Title>{product.name}</Title>
                      <Price>
                        <PriceUtils
                          price={product.price}
                          promo={product.promo}
                          allPromo={product.allPromo}
                        />
                      </Price>
                    </a>
                  </Link>
                </Item>
              </Col>
            );
          })}
        </Row>
      </ProductListWrapper>
    );
  }
}
