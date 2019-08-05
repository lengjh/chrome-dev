import { Button, Card, Modal, Icon, Input } from 'antd';
var QRCode = require('qrcode')
import css from './popup.less';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false, title: '', text: 'asdfasdf' };
    this.setQCode = this.setQCode.bind(this);
    this.createQRCode = this.createQRCode.bind(this);
  }
  createQRCode(text) {
    QRCode.toCanvas(this.canvas, text, { width: 150 }, (error) => {
      if (error) {
        return console.error(error);
      }
      console.log('success!');
    })
  }
  componentDidMount() {

    const { canvas } = this.refs;
    this.canvas = canvas;

    this.createQRCode(this.state.text);
    try {
      chrome.tabs.getSelected(null, (tab) => {
        console.log(tab);
        console.log(tab.url);
        this.setState({ text: tab.url, title: tab.title });
      });
    } catch (error) {

    }

  }
  setQCode(ev) {
    const value = ev.target.value;
    console.log(value);
    this.setState({ text: value });
    this.createQRCode(value);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <div className={css.box}>
          <div className={css.cil}></div>
          <div className={css.canvas}>
            <h2>扫描获取二维码信息</h2>
            <canvas ref="canvas" title={this.state.text}></canvas>
            <Input defaultValue={this.state.text} value={this.state.text} onChange={this.setQCode} />
          </div>
          <ul>
            <li>
              <div><Icon type="code" /><span>编辑转换</span></div>
            </li>
            <li>
              <div><Icon type="user" /><span>身份证生成</span></div>
            </li>
            <li>
              <div><Icon type="qrcode" /><span>二维码生成</span></div>
            </li>
            <li>
              <div><Icon type="credit-card" /><span>二维码生成</span></div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;