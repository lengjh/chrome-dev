import { Button, Card, Modal, Icon, Input } from "antd";
import QRCode from "../components/QRCode";
import css from "./popup.less";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className={css.body}>
        <div className={css.box}>
          <div className={css.cil} />
          <QRCode />
          <ul>
            <li>
              <a target="_blank" href="/html/tools.html?type=1">
                <Icon type="credit-card" />
                <span>JSON View</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="/html/tools.html?type=2">
                <Icon type="qrcode" />
                <span>二维码生成</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="/html/tools.html?type=3">
                <Icon type="code" />
                <span>编辑转换</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="/html/tools.html?type=4">
                <Icon type="user" />
                <span>身份证生成</span>
              </a>
            </li>

            <li>
              <a target="_blank" href="/html/tools.html?type=5">
                <Icon type="credit-card" />
                <span>银行卡生成</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
