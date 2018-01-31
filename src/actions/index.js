import * as types from './ActionTypes';

export function addPlanTemplate(plan_template) {
  return {
    type: types.ADD_PLAN_TEMPLATE,
    plan_template: plan_template
  };
}