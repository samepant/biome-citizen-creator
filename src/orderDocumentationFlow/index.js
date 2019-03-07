import React from 'react';

import Photographer from '../orderCreationFlow/orderPhotographer';

export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: null,
      imgTaken: false,
    };

    this.handlePhotographNext = this.handlePhotographNext.bind(this);
    this.handleImg = this.handleImg.bind(this);
  }

  handlePhotographNext() {
    this.setState({
      imgTaken: true,
    });
  }

  handleImg(imgBase64) {
    this.setState({
      img: imgBase64,
    });
  }

  render() {
    return (
      <div>
        {!this.state.imgTaken &&
          <Photographer handleNext={this.handlePhotographNext} handleImg={this.handleImg} />
        }
        {this.state.imgTaken &&
          <h2>Order Photographed!</h2>
        }
      </div>
    );
  }
}
