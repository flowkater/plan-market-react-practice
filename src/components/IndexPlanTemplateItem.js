import React, { Component } from 'react';

class IndexPlanTemplateItem extends Component {
    constructor(props) {
        super(props)
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.onSelect(this.props.planTemplate.id);
        console.log(this.props.planTemplate.id);
    }
    

    render() {
        return (
            <li onClick={this.handleClick}>
                {this.props.planTemplate.name} {this.props.planTemplate.description}
            </li>
        );
    }
}

export default IndexPlanTemplateItem;