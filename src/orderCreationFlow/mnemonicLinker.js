import React from 'react';

import QrReader from 'react-qr-scanner';

export default class mnemonicLinker extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      delay: 500,
      codeScanned: false,
      mnemonic: '',
    };

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleScan(data) {
    if (data) {
      if (data.length < 5) {
        // do nothing
      } else {
        this.setState({
          codeScanned: true,
          mnemonic: data,
        });
      }
    }
  }

  handleReset() {
    this.setState({
      codeScanned: false,
      mnemonic: '',
    });
  }

  handleNext() {
    this.props.handleMnemonic(this.state.mnemonic);
    this.props.handleNext();
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      transform: 'scale(2.5, 2.5)',
      clipPath: 'circle(13% at 50% 54%)',
    };
    return (
      <div className="mnemonic">
        {!this.state.codeScanned &&
          <div>
            <h2>Scan plate code</h2>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
          </div>
        }
        {this.state.codeScanned &&
          <div>
            <h2>code:</h2>
            <h2 className="code-phrase">{this.state.mnemonic}</h2>
            <div className="button-box">
              <button onClick={this.handleReset}>Redo</button>
              <button onClick={this.handleNext}>Next ⇨</button>
            </div>
          </div>
        }
      </div>
    );
  }
}
