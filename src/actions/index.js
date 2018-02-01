import * as types from './ActionTypes';

export function addPlanTemplate(plan_template) {
  return {
    type: types.ADD_PLAN_TEMPLATE,
    plan_template: plan_template
  };
}

export function setPlanTemplateList(plan_templates) {
    return {
        type: types.SET_PLAN_TEMPLATE_LIST,
        plan_templates: plan_templates
    };
}

export function setPlanTemplate(plan_template_id) {
    return {
        type: types.SET_PLAN_TEMPLATE,
        id: plan_template_id
    };
}

export const getPlanTemplateList = () => {
    return {
        type: types.GET_PLAN_TEMPLATE_LIST
    }
}

export const successGetPlanTemplateList = (plan_templates) => {
    return {
        type: types.SUCCESS_GET_PLAN_TEMPLATE_LIST,
        plan_templates: plan_templates
    }
}


