import {combineReducers} from 'redux';
import {
  GENERATE_NEW_KEYPAIR,
  UPDATE_DAKIBOT_TARGET,
  START_DAKIBOT_REQUEST,
  FINISH_DAKIBOT_REQUEST,
} from '../actions/accountCreator';
import _ from 'lodash';

function keypairGeneratorResult(state=null, action) {
  if (action.type === GENERATE_NEW_KEYPAIR) {
    return {
      pubKey: action.pubKey,
      secretKey: action.secretKey,
    };
  }
  return state;
}
function keypairGeneratorPubKey(state='', action) {
  if (action.type === GENERATE_NEW_KEYPAIR) {
    return action.pubKey;
  }
  return state;
}
function dakibotTarget(state='', action) {
  if (action.type === UPDATE_DAKIBOT_TARGET) {
    return action.target;
  }
  return state;
}

const defaultRequestState = {
  message: '',
  code: '',
  status: 'inital',
}
function dakibotStatus(state = defaultRequestState, action) {
  if (action.type === START_DAKIBOT_REQUEST) {
    return _.assign({}, defaultRequestState, {
      message: action.message,
      status: action.status,
    });
  }
  if (action.type === FINISH_DAKIBOT_REQUEST) {
    return {
      message: action.message,
      code: action.code,
      status: action.status,
    }
  }
  return state;
}

const accountCreator = combineReducers({
  keypairGeneratorResult,
  keypairGeneratorPubKey,
  dakibotTarget,
  dakibotStatus,
})
export default accountCreator