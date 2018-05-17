import axios from 'axios';

export const UPDATE_XDR_INPUT = 'UPDATE_XDR_INPUT';
export function updateXdrInput(input) {
  return {
    type: UPDATE_XDR_INPUT,
    input,
  }
}

export const UPDATE_XDR_TYPE = 'UPDATE_XDR_TYPE';
export function updateXdrType(xdrType) {
  return {
    type: UPDATE_XDR_TYPE,
    xdrType,
  }
}

export const FETCH_LATEST_TX = 'FETCH_LATEST_TX';
export function fetchLatestTx(orbitBaseUrl) {
  return dispatch => {
    axios.get(orbitBaseUrl + '/transactions?limit=1&order=desc')
      .then(r => {
        dispatch(updateXdrInput(r.data._embedded.records[0].envelope_xdr))
        dispatch(updateXdrType('TransactionEnvelope'))
      })
      .catch(r => dispatch({type: FETCH_SEQUENCE_FAIL, payload: r}))
  }
}
