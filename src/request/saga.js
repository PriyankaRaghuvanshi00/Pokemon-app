import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import "../store/action"
import fetchPokemon from './action';
import {  FetchPokemonFailure, FetchPokemonStarts, FetchPokemonSuccess, fetchUrl } from '../store/action';

function* fetchUser() {
   try {
      const user = yield call(fetchPokemon);
      yield put(FetchPokemonSuccess(user.results,user.next));
   } catch (e) {
      yield put(FetchPokemonFailure(e.message));
   }
}


function* mySaga() {
   yield takeLatest(FetchPokemonStarts, fetchUser);
}

export default mySaga;
