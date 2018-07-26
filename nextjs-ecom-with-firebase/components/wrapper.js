// @flow
import * as React from "react";
import BgDiv from "./utils/BgDiv";
import styled from "styled-components";
import { media } from "./styled_share/screen";
require("firebase/database");

export const VideoWrapper = styled.div`
  position: relative;
  height: calc(80vh - 92px);
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  .video-background {
    display: inline-block; /* let it be styled thusly */
    padding: 0; /* get rid of pre-styling */
    margin: 0;
    width: 100%; /* take up full width available */
    padding-top: 56.25%; /* give aspect ratio of 16:9; "720 / 1280 = 0.5625" */
    height: 0px; /* don't want it to expand beyond padding */
    position: relative;
  }

  .video-background iframe {
    position: absolute;
    top: -21.87%;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100vw;
    min-height: calc(80vh - 92px);
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);

    ${media.phone`
      min-height: none;
      height: 100%;
    `};
  }
`;

type Props = {
  home: any,
  page: string,
  brand: string,
  children: any,
  bg?: string[],
  bannerVideoYoutubeId?: string
};

export default class Wrapper extends React.Component<Props> {
  render() {
    const {
      home,
      page,
      children,
      bg,
      bannerVideoYoutubeId,
      brand
    } = this.props;
    const atAbout = page === "about";
    return (
      <React.Fragment>
        {!atAbout && (
          <BgDiv
            imageSet={bg}
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
        )}
        <div style={{ margin: "70px 0" }}>{children}</div>
      </React.Fragment>
    );
  }
}
