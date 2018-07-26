import * as React from "react";
import Menu from "./menu";
import styled from "styled-components";

const Block = styled.div`
  margin-bottom: 3rem;
`;

export default class Sidebar extends React.Component {
  render() {
    const { category, populars, fb, brand } = this.props;
    return (
      <div>
        <Block>
          <Menu
            categoryTree={category.filter(cate => cate.brand === brand)}
            brand={brand}
          />
        </Block>
      </div>
    );
  }
}
