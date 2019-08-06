// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";
// import css from "./index.less";
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head>
          <style>
            {`
              body { 
                margin: 0;
              }
              #__next {
                height: 100%;
              }
              .tab{
                height:100%;
                display:flex;
                flex-direction:column;
              }
              .tab .ant-tabs-content{
                flex:1;
                overflow:hidden;
              }
              .tab .ant-tabs-tabpane{
                height:100%;
                overflow:hidden;
              }
              .ant-input,textarea{
                resize:none;
              }
          `}
          </style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
