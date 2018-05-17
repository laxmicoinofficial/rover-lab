import React from 'react';
import {connect} from 'react-redux';
import PubKeyPicker from './FormComponents/PubKeyPicker';
import {
  generateNewKeypair,
  updateDakibotTarget,
  startDakibotRequest,
} from '../actions/accountCreator';
import {CodeBlock} from './CodeBlock';

class AccountCreator extends React.Component {
  render() {
    let {state, dispatch} = this.props;
    let keypairTable, keypairGeneratorLink, dakibotResultCodeblock;
    if (state.keypairGeneratorResult !== null) {
      keypairTable = <div className="simpleTable AccountCreator__generator__table">
        <div className="simpleTable__row">
          <div className="simpleTable__row__label">Public Key</div>
          <div className="simpleTable__row__content">{state.keypairGeneratorResult.pubKey}</div>
        </div>
        <div className="simpleTable__row">
          <div className="simpleTable__row__label">Secret Key</div>
          <div className="simpleTable__row__content">{state.keypairGeneratorResult.secretKey}</div>
        </div>
      </div>
    }
    if (state.keypairGeneratorPubKey !== '') {
      keypairGeneratorLink = <a onClick={() => dispatch(updateDakibotTarget(state.keypairGeneratorPubKey))}>Fund this account on the test network using the dakibot tool below</a>
    }
    if (state.dakibotStatus.code) {
      dakibotResultCodeblock = <CodeBlock className="AccountCreator__spaceTop" code={state.dakibotStatus.code} language="json" />
    }


    let dakibotMessage;
    if (state.dakibotStatus.message) {

      let messageAlertType;
      if (state.dakibotStatus.status === 'loading') {
        messageAlertType = 's-alert--info';
      } else if (state.dakibotStatus.status === 'success') {
        messageAlertType = 's-alert--success';
      } else if (state.dakibotStatus.status === 'failure') {
        messageAlertType = 's-alert--alert';
      }

      dakibotMessage = <div className={`s-alert AccountCreator__dakibot__alert ${messageAlertType}`}>
        {state.dakibotStatus.message}
      </div>
    }

    return <div className="AccountCreator">
      <div className="so-back AccountCreator__section">
        <div className="so-chunk">
          <h3>1. Keypair generator</h3>

          <p>These keypairs can be used on the Rover network where one is required. For example, it can be used as an account master key, account signer, and/or as a rover-core node key.</p>

          <button className="s-button" onClick={() => {dispatch(generateNewKeypair())}}>Generate keypair</button>
          {keypairTable}
          {keypairGeneratorLink}
        </div>
      </div>
      <div className="so-back AccountCreator__separator">
      </div>
      <div className="so-back AccountCreator__section">
        <div className="so-chunk">
          <h3>2. Dakibot: Fund a test network account</h3>
          <p>The dakibot is a orbit API endpoint that will fund an account with 10,000 laxmicoins on the test network.</p>

          <PubKeyPicker
            className="picker--spaceBottom"
            value={state.dakibotTarget}
            onUpdate={(accountId) => {
              dispatch(updateDakibotTarget(accountId))
            }} />
          <button className="s-button"
            disabled={state.dakibotTarget.length === 0}
            onClick={() => dispatch(startDakibotRequest(state.dakibotTarget))}
            >Get test network laxmicoins</button>
          {dakibotMessage}
          {dakibotResultCodeblock}
        </div>
      </div>
    </div>
  }
}

export default connect(chooseState)(AccountCreator);
function chooseState(state) {
  return {
    state: state.accountCreator,
  }
}
