import React, { Component } from 'react';
import { CreatePlanTemplate, ShowPlanTemplate, IndexPlanTemplate } from '../components';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <CreatePlanTemplate
          onAdd={this.props.addPlanTemplate}
         />
        <IndexPlanTemplate 
          plan_templates={this.props.plan_templates}
        />
        <ShowPlanTemplate 
          
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    plan_templates: state.get('plan_templates').toJS()
  }
};

const mapDispatchToProps = (dispatch) => ({
  addPlanTemplate: (plan_template) => dispatch(actions.addPlanTemplate(plan_template))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
