import React, { Component } from 'react';

class CreatePlanTemplate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.name)
    console.log(this.state.description)
  }

  render() {
    return (
      <div>
        <h3>샘플 계획 생성</h3>
        <input 
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
         />
        <br />
        <input 
          name="description"
          placeholder="설명"
          onChange={this.handleChange}
        />
        <button 
          onClick={this.handleClick}
          name="submit">추가</button>
      </div>
    );
  }
}

export default CreatePlanTemplate;