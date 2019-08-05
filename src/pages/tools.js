import { Tabs, Input, Button, Card, Modal } from "antd";
import JSONVIEW from "../components/JsonView";
// import css from "./json-view.less";
const { TabPane } = Tabs;
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
    function callback(key) {
      console.log(key);
    }
    return (
      <Tabs animated={false} defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Json view" key="1">
          <JSONVIEW />
        </TabPane>
        <TabPane tab="QR code" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="编码转换" key="3">
          Content of Tab Pane 3
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
