import React, { Component } from 'react';

class ShowPlanTemplate extends Component {
    render() {
        return (
            <div>
                <h3>Show PlanTemplate</h3>
                <ul>
                    <li>Name: {this.props.planTemplate.name}</li>
                    <li>Description: {this.props.planTemplate.description}</li>
                </ul>
            </div>
        );
    }
}

ShowPlanTemplate.defaultProps = {
    planTemplate: {}
};

export default ShowPlanTemplate;