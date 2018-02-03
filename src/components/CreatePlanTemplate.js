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
    this.props.onAdd({name: this.state.name, description: this.state.description})
  }

  render() {
    return (
      <div className="input-field">
        <h3>추천계획 만들기</h3>
        <input 
          name="name"
          placeholder="추천계획명"
          onChange={this.handleChange}
         />
        <br />
        <textarea 
          className="materialize-textarea"
          name="description"
          placeholder="설명"
          onChange={this.handleChange}
        />
        <button 
          className="btn waves-effect waves-light"
          onClick={this.handleClick}
          name="submit">
          추가
        </button>
      </div>
    );
  }
}

export default CreatePlanTemplate;
