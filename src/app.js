import React from 'react';
import OrderCreationFlow from './orderCreationFlow';
import OrderDocumentationFlow from './orderDocumentationFlow';
import Gun from './gun';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toplevel: true,
      creatingOrder: false,
      addingFoodDoc: false,
    };

    this.enterOrderCreation = this.enterOrderCreation.bind(this);
    this.enterFoodDoc = this.enterFoodDoc.bind(this);
    this.goTopLevel = this.goTopLevel.bind(this);

    this.gun = Gun();
    window.gun = this.gun;
  }

  enterOrderCreation() {
    this.setState({
      toplevel: false,
      creatingOrder: true,
    });
  }

  enterFoodDoc() {
    this.setState({
      toplevel: false,
      addingFoodDoc: true,
    });
  }

  goTopLevel() {
    this.setState({
      toplevel: true,
      creatingOrder: false,
      addingFoodDoc: false,
    });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="title">Biome Order Manager</div>
          { !this.state.toplevel &&
            <div className="exit" onClick={this.goTopLevel}>exit</div>
          }
        </header>
        { this.state.toplevel &&
          <div className="main-nav">
            <div className="nav-button create" onClick={this.enterOrderCreation}>Create order</div>
            <div className="nav-button document" onClick={this.enterFoodDoc}>Photograph order</div>
          </div>
        }
        { this.state.creatingOrder &&
          <div className="create sub-container">
            <OrderCreationFlow gun={this.gun} exit={this.goTopLevel} />
          </div>
        }
        { this.state.addingFoodDoc &&
          <div className="document sub-container">
            <OrderDocumentationFlow gun={this.gun} exit={this.goTopLevel} />
          </div>
        }
      </div>
    );
  }
}
