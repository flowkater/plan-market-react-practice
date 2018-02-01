import React, { Component } from 'react';
import { IndexPlanTemplateItem } from '.';

class IndexPlanTemplate extends Component {

  componentDidMount() {
      this.props.getPlanTemplateList()
  }

  render() {
    const mapToComponents = this.props.planTemplates.map((planTemplate, i) => (
        <IndexPlanTemplateItem
            planTemplate={planTemplate}
            onSelect={this.props.onSelect}
            key={i}
        />
        )
    );

    return (
      <div>
        <table className="striped highlight bordered cursor">
          <tbody>
            {mapToComponents}
            </tbody>
        </table>
      </div>
    );
  }
}

export default IndexPlanTemplate;

