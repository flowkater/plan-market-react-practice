import * as types from '../actions/ActionTypes'
import { List, Map, fromJS } from 'immutable';

const initialState = fromJS({
    status: 'init',
    planTemplates: [],
    selectedId: -1,
    selectedPlanTemplate: {id: -1, name: '', description: ''}
});

function planTemplates(state = initialState, action) {
    const planTemplates = state.get('planTemplates')

    switch (action.type) {
    case types.ADD_PLAN_TEMPLATE:
        return state.set('status', 'waiting')
    case types.SET_PLAN_TEMPLATE:
        return state.set('selectedId', action.id)
                    .set('selectedPlanTemplate', planTemplates.find((pt) => pt.get('id') === action.id));
    case types.GET_PLAN_TEMPLATE_LIST:
        return state.set('status', 'waiting')
    case types.SUCCESS_GET_PLAN_TEMPLATE_LIST:
        return state.set('status', 'success')
                    .set('planTemplates', fromJS(action.plan_templates))
    case types.SUCESS_POST_PLAN_TEMPLATE:
        return state.set('status', 'success')
                    .set('planTemplates', planTemplates.push(Map(action.plan_template)));
    default:
        return state
    }
}

export default planTemplates;
