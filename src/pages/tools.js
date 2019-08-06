import { Tabs, Radio, Input, Button, Card, Modal } from "antd";
import JSONVIEW from "../components/JsonView";
import QRCode from "../components/QRCode";
import Code from "../components/Code";

// import css from "./json-view.less";
const { TabPane } = Tabs;
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const query = req.query;
    return { userAgent, query };
  }
  constructor(props) {
    super(props);
    this.state = { tabType: "1", json: { "2": 2 } };
    this.onChange = this.onChange.bind(this);
    this.callback = this.callback.bind(this);
  }
  getQueryValue(name) {
    let search = location.search.slice(1);
    let obj = {};
    search = search.split("&");
    search.forEach(item => {
      let _item = item.split("=");
      obj[_item[0]] = _item[1];
    });
    return obj[name] || null;
  }
  componentDidMount() {
    let type = this.getQueryValue("type");
    console.log(type);
    this.setState({ tabType: type });
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
  callback(key) {
    console.log(key);
    this.setState({ tabType: key });
  }
  render() {
    return (
      <Tabs
        animated={false}
        defaultActiveKey={this.state.tabType}
        activeKey={this.state.tabType}
        onChange={this.callback}
        className={"tab"}
      >
        <TabPane tab="Json view" key="1">
          <JSONVIEW />
        </TabPane>
        <TabPane tab="QR code" key="2">
          <QRCode />
        </TabPane>
        <TabPane tab="编码转换" key="3">
          <Code />
        </TabPane>
        <TabPane tab="身份证号码生成" key="4">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="银行卡号码生成" key="5">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}
