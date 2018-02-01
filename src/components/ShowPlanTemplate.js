import React, { Component } from 'react';

class ShowPlanTemplate extends Component {
    render() {
        return (
            <div>
                <h5>{this.props.planTemplate.name}</h5>
                <div>
                    {
                        this.props.planTemplate.description.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                            })
                    }
                </div>
            </div>
        );
    }
}

ShowPlanTemplate.defaultProps = {
    planTemplate: {}
};

export default ShowPlanTemplate;
