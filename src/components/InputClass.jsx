import React, { Component } from "react";

class ContentClass extends Component {

  state = {
    name: ''
  }
  
  handleChange = (e) => {

    // 클래스에서는 this 로 접근
    // setState로 state 값 설정
    this.setState({
      name: e.target.value,
    });
    
  }

  render() {
    return (
      <div>
        <div>내용: {this.state.name}</div>
        <input type="text" onChange={this.handleChange} />
        <button type="button">클릭</button>
      </div>
    );
  }

}

export default ContentClass;
