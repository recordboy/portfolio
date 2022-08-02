
import React, { Component } from 'react';


class PhoneForm extends Component {
    
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} />
        <div>name: {this.state.name}</div>
      </form>
    );
  }
}
export default PhoneForm;