import * as React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import "antd/dist/antd.css";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // extract styled-components in SSR
    // https://github.com/zeit/next.js/blob/canary/examples/with-styled-components/pages/_document.js
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Canner + NextJS + Firebase demo</title>
          <meta name="description" content="Canner + NextJS + Firebase demo" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="/static/style.css" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-image-gallery@0.8.9/styles/css/image-gallery.css"
          />
          <link
            href="https://unpkg.com/react-image-lightbox@5.0.0/style.css"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <div id="fb-root" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
