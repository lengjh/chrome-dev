import { Button, Card, Modal, Input, Icon } from "antd";
import css from './home.less';
const { Search } = Input;
class App extends React.Component {
  state = { visible: false };

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
      <div className={css.box}>
        <div className={css.search}><Search placeholder="Search Google" /></div>
      </div>
    );
  }
}

export default App;
