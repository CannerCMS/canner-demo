import * as React from "react";
import { Row, Col, Alert } from "antd";
import BgDiv from "../components/utils/BgDiv";
import ProductList from "../components/product/productList";
import SingleProduct from "../components/product/singleProduct";
import Menu from "../components/product/menu";
import MaxScreen from "../components/utils/maxScreen";
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
      .ref("product")
      .once("value");

    const storeSnapshot = await firebase
      .database()
      .ref("store")
      .once("value");

    const categorySnapshot = await firebase
      .database()
      .ref("category")
      .once("value");

    return {
      store: storeSnapshot.val(),
      cateId: query.cateId,
      prodId: query.prodId,
      allProducts: keyToArr(productSnapshot.val()),
      category: keyToArr(categorySnapshot.val())
    };
  }

  render() {
    const { store, allProducts, category, cateId, prodId } = this.props;
    const bgImages = values(store.bannerBg).map(pic => pic.img && pic.img.url);

    const finalProduct =
      cateId && cateId !== "all"
        ? allProducts.filter(prod => prod.category === cateId)
        : allProducts;
    const currentCategory = category.find(cate => cate._id === cateId);

    const ProductFinalList = () => {
      return finalProduct.length > 0 ? (
        <ProductList products={finalProduct} />
      ) : (
        <Alert
          message="No product"
          description="This category don't have any product"
          type="warning"
          showIcon
        />
      );
    };

    return (
      <React.Fragment>
        <BgDiv
          imageSet={bgImages}
          slideSetting={{
            dots: false,
            effect: "fade",
            speed: 2000
          }}
          style={{
            height: `calc(70vh - 92px)`,
            position: "relative"
          }}
        />
        <MaxScreen>
          <div className="container" style={{ marginTop: "30px" }}>
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
                      <span className="sub-header">
                        {(cateId &&
                          currentCategory &&
                          `Selected category: ${currentCategory.name}`) ||
                          "All category"}
                      </span>
                    </Heading>
                    <ProductFinalList />
                  </div>
                ) : (
                  <SingleProduct
                    prodId={prodId}
                    selectedProduct={allProducts.find(
                      prod => prod._id === prodId
                    )}
                  />
                )}
              </Col>
            </Row>
          </div>
        </MaxScreen>
      </React.Fragment>
    );
  }
}
