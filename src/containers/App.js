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
          planTemplates={this.props.planTemplates}
          onSelect={this.props.setPlanTemplate}
          getPlanTemplateList={this.props.getPlanTemplateList}
        />
        <ShowPlanTemplate 
            planTemplate={this.props.selectedPlanTemplate}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    planTemplates: state.get('planTemplates').toJS(),
    selectedId: state.get('selectedId'),
    selectedPlanTemplate: state.get('selectedPlanTemplate').toJS()
  }
};

const mapDispatchToProps = (dispatch) => ({
  addPlanTemplate: (plan_template) => dispatch(actions.addPlanTemplate(plan_template)),
  setPlanTemplate: (id) => dispatch(actions.setPlanTemplate(id)),
  getPlanTemplateList: () => dispatch(actions.getPlanTemplateList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
