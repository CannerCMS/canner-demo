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
  }
`;
