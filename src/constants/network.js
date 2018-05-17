import {Network, Networks} from 'rover-network-sdk';

const NETWORK = {
  available: {
    test: {
      url: 'http://orbit-testnet.rover.network',
      networkObj: new Network(Networks.TESTNET),
    },
    public: {
      url: 'http://orbit-testnet.rover.network',
      networkObj: new Network(Networks.PUBLIC),
    }
  },
  defaultName: 'test',
};
export default NETWORK;
