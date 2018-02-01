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
            <tr onClick={this.handleClick}>
                <td>
                <b>{this.props.planTemplate.name}</b>
                <br />
                {this.props.planTemplate.description.substring(0, 20)} ...
                </td>
            </tr>
        );
    }
}

export default IndexPlanTemplateItem;
