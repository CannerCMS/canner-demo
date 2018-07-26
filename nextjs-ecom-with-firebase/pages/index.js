import * as React from "react";
import { Row, Col, Alert } from "antd";
import Wrapper from "../components/wrapper";
import ProductList from "../components/product/productList";
import SingleProduct from "../components/product/singleProduct";
import Menu from "../components/product/menu";
import MaxScreen from "../components/utils/maxScreen";
import { fromJS } from "immutable";
import keyToArr from "../components/utils/keyToArr";
import styled from "styled-components";
import { values } from "lodash";
import initialDatabase from "../components/utils/initialDatabase";

const Block = styled.div`
  margin-bottom: 3rem;
`;

const Heading = styled.div`
  margin-bottom: 1.5rem;

  span:first-child {
    margin-right: 20px;
  }
`;

export default class Ecommerce extends React.Component {
  static async getInitialProps({ query }) {
    const firebase = initialDatabase();

    const productSnapshot = await firebase
      .database()
      .ref("products")
      .once("value");

    const hanataStoreSnapshot = await firebase
      .database()
      .ref("hanataStore")
      .once("value");

    const categorySnapshot = await firebase
      .database()
      .ref("categories")
      .once("value");

    const homeSnapshot = await firebase
      .database()
      .ref("home")
      .once("value");

    return {
      hanataStore: hanataStoreSnapshot.val(),
      cateId: query.cateId,
      prodId: query.prodId,
      allProducts: keyToArr(productSnapshot.val()),
      category: keyToArr(categorySnapshot.val()),
      products: keyToArr(productSnapshot.val()).filter(
        product => product.brand === "HANATA"
      ),
      home: homeSnapshot.val()
    };
  }

  render() {
    const {
      home,
      allProducts,
      hanataStore,
      products,
      category,
      cateId,
      prodId
    } = this.props;
    const bgImages = values(hanataStore.bannerBg).map(
      pic => pic.img && pic.img.url
    );

    const finalProduct =
      cateId && cateId !== "all"
        ? products.filter(prod => prod.category === cateId)
        : products;
    const currentCategory = category.find(cate => cate._id === cateId);

    const ProductFinalList = () => {
      return finalProduct.length > 0 ? (
        <ProductList products={fromJS(finalProduct)} />
      ) : (
        <Alert
          message="尚無商品"
          description="此類別尚無商品"
          type="warning"
          showIcon
        />
      );
    };

    return (
      <Wrapper home={home} page="hanataStore" bg={bgImages} brand="HANATA">
        <MaxScreen>
          <div className="container">
            <Row>
              <Col sm={5} xs={0}>
                <Block>
                  <Menu categoryTree={category} />
                </Block>
              </Col>
              <Col sm={{ span: 17, offset: 2 }} xs={24}>
                {!prodId ? (
                  <div>
                    <Heading>
                      <span className="header-2">
                        {(cateId &&
                          currentCategory &&
                          `類別：${currentCategory.name}`) ||
                          "所有商品"}
                      </span>
                    </Heading>
                    <ProductFinalList />
                  </div>
                ) : (
                  <SingleProduct
                    prodId={prodId}
                    brand={brand}
                    allProduct={fromJS(allProducts)}
                    selectedProduct={fromJS(
                      products.find(prod => prod._id === prodId)
                    )}
                  />
                )}
              </Col>
            </Row>
          </div>
        </MaxScreen>
      </Wrapper>
    );
  }
}
