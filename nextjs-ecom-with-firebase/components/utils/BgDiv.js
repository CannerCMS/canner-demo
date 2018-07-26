import * as React from "react";
import { Carousel } from "antd";

export default class BgDiv extends React.Component {
  componentDidMount() {
    const { imageSet, slideSetting } = this.props;
    if (imageSet && imageSet.length > 0) {
      this.timeInterval = setInterval(() => {
        if (this.slide) this.slide.next();
      }, slideSetting.speed || 3000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  render() {
    const {
      imageSet,
      image,
      style,
      children,
      slideSetting,
      ...rest
    } = this.props;

    if (imageSet && imageSet.length > 0) {
      return (
        <div
          style={{
            position: "relative",
            width: style.width ? style.width : "100%",
            height: style.height ? style.height : "300px"
          }}
        >
          <div
            style={{
              color: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh"
            }}
          >
            <Carousel
              ref={c => {
                this.slide = c;
              }}
              swipe={false}
              swipeToSlide={false}
              {...slideSetting}
              autoplay={false}
            >
              {imageSet.map((image, i) => (
                <div key={i}>
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      backgroundImage: `url(${image
                        .replace("1200x", "1400x")
                        .replace("comm", "com")})`,
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      ...style
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div>{children}</div>
        </div>
      );
    }
    return (
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundImage: `url(${image && image.replace("1200x", "1400x")})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          ...style
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
