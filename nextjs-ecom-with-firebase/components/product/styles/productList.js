import color from "../../styled_share/color";
import styled from "styled-components";

export const ProductListWrapper = styled.div`
  a {
    text-decoration: none;
  }
`;

export const Item = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const Title = styled.div`
  color: ${color.blue};
  font-size: 1rem;
  margin: 1rem 0;
`;

export const Price = styled.div`
  width: 100%;
  margin: auto;
`;

export const Img = styled.div`
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);

    .hoverWrapper {
      -webkit-transform: scale(0.9) translateY(0);
      transform: scale(0.9) translateY(0);
    }
  }
`;

export const Label = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const Input = styled.div`
  margin: 20px 0;
`;

const wrapperHeight = "60px";

export const HoverWrapper = styled.div`
  width: 100%;
  position: absolute;
  height: ${wrapperHeight};
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(${wrapperHeight});
  transition: transform 400ms;

  .button {
    position: relative;
    flex: 1;

    &:hover {
      svg {
        color: $main-color;
      }
    }

    &:first-child {
      border-right: 1px solid #fff;
    }
  }

  .buy-cart,
  .add-cart {
    position: relative;
    bottom: 5px;
    font-size: 25px;
    color: #fff;
    transition: color 400ms;
    background: transparent;
  }
`;
