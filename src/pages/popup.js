import { Button, Card, Modal, Icon, Input } from 'antd';
import QRCode from '../components/QRCode';
import css from './popup.less';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: false, };
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
          <QRCode />
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