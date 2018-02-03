import React, { Component } from 'react';
import { CreatePlanTemplate, ShowPlanTemplate, IndexPlanTemplate } from '../components';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <div className="row">
          <div className="col s4">
            <div className="row">
              <div className="col s12">
                <CreatePlanTemplate
                      onAdd={this.props.addPlanTemplate}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <IndexPlanTemplate 
                  planTemplates={this.props.planTemplates}
                  onSelect={this.props.setPlanTemplate}
                  getPlanTemplateList={this.props.getPlanTemplateList}
                />
              </div>
            </div>
          </div>
          <div className="col s8">
            <ShowPlanTemplate 
                planTemplate={this.props.selectedPlanTemplate}
            />
          </div>
        </div>
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
