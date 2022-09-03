import { call, put, takeLatest } from "redux-saga/effects";

import { Api } from "../../../../entries/ApiTransport";
import sagaAssessor from "../../../../utils/sagaAssessor";
import { actions, types } from "./actions";

const api = Api.getInstance();

const getViewMahineId = ({ payload }) =>
  sagaAssessor(
    () =>
      function* () {
        yield put(actions.VIEW_MACHINE.SUCCESS(payload));
      },
    (err) => actions.VIEW_MACHINE.FAILED(err)
  );

const clearViewMahineId = () =>
  sagaAssessor(
    () =>
      function* () {
        yield put(actions.CLEAR_VIEW_MACHINE.SUCCESS());
      },
    (err) => actions.VIEW_MACHINE.FAILED(err)
  );

export default function* () {
  yield takeLatest(types.VIEW_MACHINE.REQUEST, getViewMahineId);
  yield takeLatest(types.CLEAR_VIEW_MACHINE.REQUEST, clearViewMahineId);
}
