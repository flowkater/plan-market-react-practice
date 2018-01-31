import * as types from '../actions/ActionTypes'
import { Map, fromJS } from 'immutable';

const initialState = fromJS({
  plan_templates: [
  {name: "1", description: "2"},
  {name: "3", description: "4"},
  {name: "5", description: "6"},
  {name: "7", description: "8"},
  {name: "9", description: "10"},]
});

function plan_templates(state = initialState, action) {
  const plan_templates = state.get('plan_templates')

  switch (action.type) {
    case types.ADD_PLAN_TEMPLATE:
      return state.set('plan_templates', 
                        plan_templates.push(Map(action.plan_template)));
    default:
      return state
  }
}

export default plan_templates;