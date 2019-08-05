import { Input, Button, Card, Modal } from "antd";
import dynamic from "next/dynamic";
const { TextArea } = Input;
import css from "./index.less";
// import ReactJson from "react-json-view";
const ReactJson = dynamic(import("react-json-view"), {
  ssr: false //这个要加上,禁止使用 SSR
});
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }
  constructor(props) {
    super(props);
    this.state = { json: { "2": 2 } };
    this.onChange = this.onChange.bind(this);
  }
  onChange(ev) {
    let json;
    try {
      json = JSON.parse(ev.target.value);
    } catch (error) {}
    if (json) {
      this.setState({ json: json });
    }
    console.log(json, ev.target.value);
  }
  render() {
    return (
      <div className={css.box}>
        <div>
          <TextArea
            style={{ height: "100%" }}
            defaultValue={JSON.stringify(this.state.json)}
            onChange={this.onChange}
          />
        </div>
        <div>
          <ReactJson
            displayDataTypes={true}
            src={this.state.json}
            theme="monokai"
          />
        </div>
      </div>
    );
  }
}
