/**
 * @flow
 */

import * as React from "react";
import styled from "styled-components";
import { media } from "../styled_share/screen";

type Props = {
  children: React.Element<*> | React.ChildrenArray<React.Element<*>>,
  styles?: any
};

const Container = styled.div`
  max-width: 1280px;
  padding: 0 40px;
  margin: 0 auto;
  height: inherit;
  ${media.giant`
    max-width: 1170px;
  `}
  ${media.desktop`
    max-width: 992px;
  `}
  ${media.tablet`
    max-width: 768px;
    padding: 0 10px;
  `}
  ${media.phone`
    max-width: 720px;
    padding: 0 5px;
  `}
`;

export default class MaxScreen extends React.Component<Props> {
  render() {
    const { styles } = this.props;

    return <Container style={styles}>{this.props.children}</Container>;
  }
}
