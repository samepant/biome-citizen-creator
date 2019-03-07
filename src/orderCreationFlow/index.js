import React from 'react';

import MnemonicLinker from './mnemonicLinker';
import OrderForm from './orderForm';
import Photographer from './orderPhotographer';

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      orderType: '',
      orderNumber: '',
      hasDrink: null,
      mnemonic: null,
      orderImage: null,
      orderRecorded: false,
      sampleRecorded: false,
      mnemonicLinked: false,
    };

    this.onChange = this.onChange.bind(this);
    this.handleOrderNext = this.handleOrderNext.bind(this);
    this.handleDrink = this.handleDrink.bind(this);
    this.handleDish = this.handleDish.bind(this);
    this.handlePhotographNext = this.handlePhotographNext.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleMnemonic = this.handleMnemonic.bind(this);
    this.handleMnemonicNext = this.handleMnemonicNext.bind(this);
  }

  onChange(e) {
    let value;
    if (e.target.name === 'orderNumber') {
      value = parseInt(e.target.value, 10);
    } else {
      value = e.target.value;
    }

    this.setState({
      [e.target.name]: value,
    });
  }

  handleOrderNext(e) {
    e.preventDefault();
    this.setState({
      orderRecorded: true,
    });
  }

  handleDrink(e) {
    this.setState({
      hasDrink: e.target.dataset.drink === 'true',
    });
  }

  handleDish(e) {
    this.setState({
      orderType: e.target.dataset.dish,
    });
  }

  handleImg(base64) {
    this.setState({
      orderImage: base64,
    });
  }

  handlePhotographNext() {
    this.setState({
      sampleRecorded: true,
    });
  }

  handleMnemonic(mnemonicCode) {
    this.setState({
      mnemonic: mnemonicCode,
    });
  }

  handleMnemonicNext() {
    this.setState({
      mnemonicLinked: true
    });
  }

  render() {
    return (
      <div>
        {!this.state.orderRecorded &&
          <OrderForm
            name={this.state.name}
            onChange={this.onChange}
            orderNumber={this.state.orderNumber}
            orderType={this.state.orderType}
            handleDish={this.handleDish}
            hasDrink={this.state.hasDrink}
            handleDrink={this.handleDrink}
            handleNext={this.handleOrderNext}
          />
        }
        {(this.state.orderRecorded && !this.state.sampleRecorded) &&
          <Photographer handleNext={this.handlePhotographNext} handleImg={this.handleImg} />
        }
        {(this.state.sampleRecorded && !this.state.mnemonicLinked) &&
          <MnemonicLinker handleNext={this.handleMnemonicNext} handleMnemonic={this.handleMnemonic} />
        }
        {this.state.mnemonicLinked &&
          <h2>FINSIHED</h2>
        }
      </div>
    );
  }
}
