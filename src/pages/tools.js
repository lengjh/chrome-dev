import { Tabs, Drawer, Switch, Icon, Select } from "antd";
import JSONVIEW from "../components/JsonView";
import QRCode from "../components/QRCode";
import Code from "../components/Code";
import ImageBase64 from "../components/ImageBase64";
import css from "./tools.less";

const { TabPane } = Tabs;
const { Option } = Select;
export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }
  constructor(props) {
    super(props);
    this.state = { tabType: "1", json: { "2": 2 }, visible: false };
    this.onChange = this.onChange.bind(this);
    this.callback = this.callback.bind(this);
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };
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
    let type = this.getQueryValue("type") || '1';
    console.log(type);
    this.setState({ tabType: type });
  }
  onChange(ev) {
    let json;
    try {
      json = JSON.parse(ev.target.value);
    } catch (error) { }
    if (json) {
      this.setState({ json: json });
    }
    console.log(json, ev.target.value);
  }
  callback(key) {
    console.log(key);
    this.setState({ tabType: key });
  }
  switchOnChange(checked) {
    console.log(`switch to ${checked}`);
  }
  render() {
    return (
      <>
        <Tabs
          animated={false}
          defaultActiveKey={this.state.tabType}
          activeKey={this.state.tabType}
          onChange={this.callback}
          className={"tab"}
        >
          <TabPane tab="JSON View" key="1">
            <JSONVIEW />
          </TabPane>
          <TabPane tab="QR code" key="2">
            <QRCode />
          </TabPane>
          <TabPane tab="编码转换" key="3">
            <Code />

          </TabPane>
          <TabPane tab="身份证号码生成" key="4" disabled>

          </TabPane>
          <TabPane tab="银行卡号码生成" key="5" disabled>

          </TabPane>
          <TabPane tab="图片Base64编码" key="6" >
            <ImageBase64 />
          </TabPane>
        </Tabs>
        <Icon type="menu" className={css.menu} onClick={this.showDrawer} />
        <Drawer
          title="设置"
          placement="right"
          // closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <dl>
            <dt>开启记忆</dt>
            <dd><Switch defaultChecked checkedChildren="开" unCheckedChildren="关" onChange={this.switchOnChange} /></dd>
          </dl>
          <dl>
            <dt>Code 主题</dt>
            <dd>
              <Select defaultValue="ocean" style={{ width: '100%' }}>
                <Option value="ocean">ocean</Option>
              </Select>
            </dd>
          </dl>
        </Drawer>
      </>
    );
  }
}
