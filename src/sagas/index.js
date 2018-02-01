import { all, fork } from "redux-saga/effects";
import { watchPlanTemplateRequest } from "./planTemplate";

export default function* rootSaga() {
    yield all([
        fork(watchPlanTemplateRequest)
    ]);
}
