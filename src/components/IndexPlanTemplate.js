import React, { Component } from 'react';
import { IndexPlanTemplateItem } from '.';

class IndexPlanTemplate extends Component {

  render() {
    const mapToComponents = this.props.plan_templates.map((plan_template, i) => (
                              <IndexPlanTemplateItem
                                  name={plan_template.name}
                                  description={plan_template.description}
                                  key={i}
                                />
                              )
    );

    return (
      <div>
        <h3>Index Plan Template</h3>
        <ul>
          {mapToComponents}
        </ul>
      </div>
    );
  }
}

export default IndexPlanTemplate;

