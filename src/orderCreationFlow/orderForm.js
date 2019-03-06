import React from 'react';

const orderForm = (props) => {
  return (
    <form className="order-form">
      <div className="form-item center">
        <label>Name</label>
        <input type="text" value={props.name} name="name" onChange={props.onChange} />
      </div>
      <div className="form-item center">
        <label>Order number</label>
        <input type="number" value={props.orderNumber} name="orderNumber" onChange={props.onChange} />
      </div>
      <div className="form-item box">
        <label>Which dish?</label>
        <div className="box-options">
          <div className={props.orderType === '1st' ? 'active option' : 'option'} onClick={props.handleDish} data-dish='1st'>
            1st dish option
          </div>
          <div className={props.orderType === '2nd' ? 'active option' : 'option'} onClick={props.handleDish} data-dish='2nd'>
            2nd dish option
          </div>
        </div>
      </div>
      <div className="form-item box">
        <label>Has a drink?</label>
        <div className="box-options">
          <div className={props.hasDrink ? 'active option' : 'option'} onClick={props.handleDrink} data-drink='true'>
            yes
          </div>
          <div className={!props.hasDrink ? 'active option' : 'option'} onClick={props.handleDrink} data-drink='false'>
            no
          </div>
        </div>
      </div>
      <button onClick={props.handleNext}>Next ⇨</button>
    </form>
  );
};

export default orderForm;
