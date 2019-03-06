import React from 'react';

import OrderForm from './orderForm';

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
    this.handleNext = this.handleNext.bind(this);
    this.handleDrink = this.handleDrink.bind(this);
    this.handleDish = this.handleDish.bind(this);
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

  handleNext(e) {
    e.preventDefault();
    this.props.gun.get('orders').set({
      name: this.state.name,
      orderNumber: this.state.orderNumber,
      orderType: this.state.orderType,
      hasDrink: this.state.hasDrink,
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
            handleNext={this.handleNext}
          />
        }
      </div>
    );
  }
}
