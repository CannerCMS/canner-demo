// @flow
import * as React from "react";
import styled from "styled-components";

type Props = {
  promo: number,
  price: number,
  allPromo: number,
  direction: string,
  size: string,
  style: Object,
  originStyle: Object,
  promoStyle: Object
};

const Price = styled.div`
  text-align: center;
  letter-spacing: 1px;
`;

const Promo = styled.div`
  margin-right: 20px;
  color: #333;
  display: inline-block;
  font-weight: 400;
  span::before {
    content: "NT $ ";
  }
`;

const Origin = styled.div`
  color: #9a9a9a;
  display: inline-block;
  text-decoration: line-through;
  span::before {
    content: "NT $ ";
  }
`;

export default class PriceComp extends React.Component<Props> {
  render() {
    let {
      promo,
      price,
      allPromo,
      size,
      style,
      originStyle,
      promoStyle
    } = this.props;
    if (allPromo > 0) {
      promo = price * (allPromo / 100);
    } else if (promo === 0) {
      promo = price;
    }
    promo = Math.round(promo);
    return (
      <Price style={{ fontSize: size, ...style }}>
        {promo && (
          <Promo style={{ ...promoStyle }}>
            <span>{promo}</span>
          </Promo>
        )}
        {promo === price ? null : (
          <Origin>
            ( <span style={{ ...originStyle }}>{price}</span> )
          </Origin>
        )}
      </Price>
    );
  }
}
