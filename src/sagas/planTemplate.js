import { takeLatest, call, put } from 'redux-saga/effects'
import * as actionTypes from '../actions/ActionTypes'
import * as actions from '../actions';
import * as api from '../api';

function* getPlanTemplateListSaga(action) {
    try {
        const payload = yield call(api.getPlanTemplateList);
        if(payload.data.plan_templates) {
            yield put(actions.successGetPlanTemplateList(payload.data.plan_templates))
        }
    } catch (e) {
        console.log(e);
    }
}

function* postPlanTemplateSaga(action) {
    try {
        const payload = yield call(api.postPlanTemplate, action.plan_template);
    } catch (e) {
        console.log(e);
    }
}

export function* watchPlanTemplateRequest() {
    yield takeLatest( actionTypes.GET_PLAN_TEMPLATE_LIST, getPlanTemplateListSaga );
    yield takeLatest( actionTypes.ADD_PLAN_TEMPLATE, postPlanTemplateSaga );
}
