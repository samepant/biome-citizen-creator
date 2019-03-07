import React from 'react';

import Webcam from 'react-webcam';

export default class orderPhotographer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picTaken: false,
      imgSrc: null,
    };

    this.snapPic = this.snapPic.bind(this);
    this.redo = this.redo.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  snapPic() {
    const imgBase64 = this.webcam.getScreenshot();

    this.setState({
      imgSrc: imgBase64,
      picTaken:true,
    });
  }

  redo() {
    this.setState({
      picTaken: false,
      imgSrc: null,
    });
  }

  handleNext() {
    this.props.handleImg(this.state.imgSrc);
    this.props.handleNext();
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: 'user',
    };

    return (
      <div className="photographer">
        {!this.state.picTaken &&
          <div>
            <Webcam
              audio={false}
              height={350}
              ref={(webcam) => { this.webcam = webcam; }}
              screenshotFormat="image/jpeg"
              width={350}
              videoConstraints={videoConstraints}
            />
            <div className="button-box">
              <button onClick={this.snapPic}>Take pic</button>
            </div>
          </div>
        }
        {this.state.picTaken &&
          <div>
            <img src={this.state.imgSrc} />
            <div className="button-box">
              <button onClick={this.redo}>Redo</button>
              <button onClick={this.handleNext}>Next ⇨</button>
            </div>
          </div>
        }
      </div>
    );
  }
}
