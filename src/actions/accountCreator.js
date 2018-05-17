import axios from 'axios';
import dispatchInNewStack from '../utilities/dispatchInNewStack';
import {Keypair} from 'rover-network-sdk';

export const GENERATE_NEW_KEYPAIR = 'GENERATE_NEW_KEYPAIR';
export function generateNewKeypair() {
  let keypair = Keypair.random();
  return {
    type: GENERATE_NEW_KEYPAIR,
    pubKey: keypair.publicKey(),
    secretKey: keypair.secret(),
  }
}

export const UPDATE_DAKIBOT_TARGET = 'UPDATE_DAKIBOT_TARGET';
export function updateDakibotTarget(target) {
  return {
    type: UPDATE_DAKIBOT_TARGET,
    target,
  }
}

export const START_DAKIBOT_REQUEST = 'START_DAKIBOT_REQUEST';
export const FINISH_DAKIBOT_REQUEST = 'FINISH_DAKIBOT_REQUEST';
export function startDakibotRequest(target) {
  return dispatch => {
    dispatch({
      type: START_DAKIBOT_REQUEST,
      message: 'Loading...',
      status: 'loading',
    });

    axios.get('http://dakibot.rover.network:9005/?addr=' + target)
      .then(r => {
        dispatchInNewStack(dispatch, {
          type: FINISH_DAKIBOT_REQUEST,
          target,
          message: `Successfully funded ${target} on the test network`,
          status: 'success',
          code: '',
        })
      })
      .catch(e => {
        let code, message;
        if (e.status === 0) {
          code = '';
          message = 'Unable to reach Dakibot server at http://dakibot.rover.network';
        } else {
          code = JSON.stringify(e.data, null, 2);
          message = `Failed to fund ${target} on the test network`;
        }

        dispatchInNewStack(dispatch, {
          type: FINISH_DAKIBOT_REQUEST,
          target,
          message,
          status: 'failure',
          code,
        })
      })
  }
}
