import styled from "styled-components";
import color from "../../styled_share/color";
import { media } from "../../styled_share/screen";

export const SingleProduct = styled.div`
  padding-bottom: 6rem;

  .image-gallery-thumbnail.active {
    border: 4px solid ${color.mainColor};
  }
`;

export const ProductContainer = styled.div`
  ${media.phone`
    margin-top: 40px;
  `};
`;

export const Title = styled.div`
  color: ${color.darkBlue};
  letter-spacing: 1px;
  display: inline-block;
`;

export const ShareButton = styled.div`
  display: inline-block;
  float: right;
`;

export const AddCartBtn = styled.button`
  background: #fff;
  border: 1px solid ${color.mainColor};
  color: #666;
`;

export const BuyBtn = styled.button`
  margin-left: 20px;
  color: #fff;
`;

export const Info = styled.div`
  margin: 1rem 0;
`;

export const No = styled.div`
  color: #ccc;
  display: inline-block;
  font-size: 0.8rem;
`;

export const Price = styled.div`
  width: 400px;
  margin: 30px 0;
  font-size: 16px;

  div {
    text-align: left;
  }
`;

export const Hr = styled.div`
  margin: 1rem 0;
  border-bottom: 1px solid #ddd;
  height: 1px;
`;

export const Input = styled.div`
  margin: 20px 0;
`;

export const Label = styled.div`
  margin-right: 20px;
  font-size: 16px;
  display: inline-block;
`;

export const BuyInfo = styled.div`
  margin-top: 60px;
`;

export const RecommandHeader = styled.div`
  margin: 5rem 0 3rem;
  text-align: center;
`;

export const AddBuyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const AddItem = styled.div`
  margin: 0 10px;
  flex: 1;
  max-width: 250px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  color: ${color.darkBlue};
  text-align: center;
  margin: 0.8rem 0;
  letter-spacing: 1px;
`;
