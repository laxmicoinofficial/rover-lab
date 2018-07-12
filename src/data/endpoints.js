export function getEndpoint(resource, endpoint) {
  let res = endpointsMap[resource];
  if (!res) { return; }

  return res.endpoints[endpoint];
}

export function getTemplate(...args) {
  let ep = getEndpoint(...args)
  if (!ep) { return; }

  return ep.path;
}

export const endpointsMap = {
  'accounts': {
    'label': 'Accounts',
    'endpoints': {
      'single': {
        'label': 'Single Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/accounts-single.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}',
        },
        'setupComponent': require('../components/SetupPanes/SingleAccount'),
      }
    }
  },
  'assets': {
    'label': 'Assets',
    'endpoints': {
      'single': {
        'label': 'All Assets',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/assets-all.html',
        'method': 'GET',
        'path': {
          template: '/assets{?asset_code,asset_issuer,cursor,order,limit}',
        },
        'setupComponent': require('../components/SetupPanes/AllAssets'),
      }
    }
  },
  'effects': {
    'label': 'Effects',
    'endpoints': {
      'all': {
        'label': 'All Effects',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/effects-all.html',
        'method': 'GET',
        'path': {
          template: '/effects{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/All'),
      },
      'for_account': {
        'label': 'Effects for Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/effects-for-account.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}/effects{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForAccount'),
      },
      'for_ledger': {
        'label': 'Effects for Ledger',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/effects-for-ledger.html',
        'method': 'GET',
        'path': {
          template: '/ledgers/{ledger}/effects{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForLedger'),
      },
      'for_operation': {
        'label': 'Effects for Operation',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/effects-for-operation.html',
        'method': 'GET',
        'path': {
          template: '/operations/{operation}/effects{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForOperation'),
      },
      'for_transaction': {
        'label': 'Effects for Transaction',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/effects-for-transaction.html',
        'method': 'GET',
        'path': {
          template: '/transactions/{transaction}/effects{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForTransaction'),
      }
    }
  },
  'ledgers': {
    'label': 'Ledger',
    'endpoints': {
      'all': {
        'label': 'All Ledgers',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/ledgers-all.html',
        'method': 'GET',
        'path': {
          template: '/ledgers{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/All'),
      },
      'single': {
        'label': 'Single Ledger',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/ledgers-single.html',
        'method': 'GET',
        'path': {
          template: '/ledgers/{ledger}',
        },
        'setupComponent': require('../components/SetupPanes/SingleLedger'),
      }
    }
  },
  'offers': {
    'label': 'Offers',
    'endpoints': {
      'for_account': {
        'label': 'Offers for Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/offers-for-account.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}/offers{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForAccount'),
      }
    }
  },
  'operations': {
    'label': 'Operations',
    'endpoints': {
      'all': {
        'label': 'All Operations',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/operations-all.html',
        'method': 'GET',
        'path': {
          template: '/operations{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/All'),
      },
      'single': {
        'label': 'Single Operation',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/operations-single.html',
        'method': 'GET',
        'path': {
          template: '/operations/{operation}',
        },
        'setupComponent': require('../components/SetupPanes/SingleOperation'),
      },
      'for_account': {
        'label': 'Operations for Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/operations-for-account.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}/operations{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForAccount'),
      },
      'for_ledger': {
        'label': 'Operations for Ledger',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/operations-for-ledger.html',
        'method': 'GET',
        'path': {
          template: '/ledgers/{ledger}/operations{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForLedger'),
      },
      'for_transaction': {
        'label': 'Operations for Transaction',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/operations-for-transaction.html',
        'method': 'GET',
        'path': {
          template: '/transactions/{transaction}/operations{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForTransaction'),
      }
    }
  },
  'order_book': {
    'label': 'Order Book',
    'endpoints': {
      'details': {
        'label': 'Details',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/orderbook-details.html',
        'method': 'GET',
        'path': {
          template: '/order_book{?selling_asset_type,selling_asset_code,selling_asset_issuer,buying_asset_type,buying_asset_code,buying_asset_issuer}',
          'selling_asset_type': 'selling_asset.type',
          'selling_asset_code': 'selling_asset.code',
          'selling_asset_issuer': 'selling_asset.issuer',
          'buying_asset_type': 'buying_asset.type',
          'buying_asset_code': 'buying_asset.code',
          'buying_asset_issuer': 'buying_asset.issuer',
        },
        'setupComponent': require('../components/SetupPanes/OrderBookDetails'),
      }
    }
  },
  'paths': {
    'label': 'Paths',
    'endpoints': {
      'all': {
        'label': 'Find Payment Paths',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/path-finding.html',
        'method': 'GET',
        'path': {
          template: '/paths{?source_account,destination_account,destination_asset_type,destination_asset_code,destination_asset_issuer,destination_amount}',
          'destination_asset_type': 'destination_asset.type',
          'destination_asset_code': 'destination_asset.code',
          'destination_asset_issuer': 'destination_asset.issuer',
        },
        'setupComponent': require('../components/SetupPanes/FindPaymentPaths'),
      }
    }
  },
  'trade_aggregations': {
    'label': 'Trade Aggregations',
    'endpoints': {
      'all': {
        'label': 'Trade Aggregations',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/trade_aggregations.html',
        'method': 'GET',
        'path': {
          template: '/trade_aggregations{?base_asset_type,base_asset_code,base_asset_issuer,counter_asset_type,counter_asset_code,counter_asset_issuer,start_time,end_time,resolution,limit,order}',
          'base_asset_type': 'base_asset.type',
          'base_asset_code': 'base_asset.code',
          'base_asset_issuer': 'base_asset.issuer',
          'counter_asset_type': 'counter_asset.type',
          'counter_asset_code': 'counter_asset.code',
          'counter_asset_issuer': 'counter_asset.issuer',
          'start_time': 'start_time',
          'end_time': 'end_time',
          'resolution': 'resolution'
        },
        'setupComponent': require('../components/SetupPanes/TradeAggregations'),
      },
    }
  },
  'trades': {
    'label': 'Trades',
    'endpoints': {
      'all': {
        'label': 'All Trades',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/trades.html',
        'method': 'GET',
        'path': {
          template: '/trades{?base_asset_type,base_asset_code,base_asset_issuer,counter_asset_type,counter_asset_code,counter_asset_issuer,offer_id,cursor,limit,order}',
          'base_asset_type': 'base_asset.type',
          'base_asset_code': 'base_asset.code',
          'base_asset_issuer': 'base_asset.issuer',
          'counter_asset_type': 'counter_asset.type',
          'counter_asset_code': 'counter_asset.code',
          'counter_asset_issuer': 'counter_asset.issuer',
          'offer_id': 'offer_id'
        },
        'setupComponent': require('../components/SetupPanes/Trades'),
      },
      'for_account': {
        'label': 'Trades for Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/trades.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}/trades{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForAccount'),
      },
    }
  },
  'payments': {
    'label': 'Payments',
    'endpoints': {
      'all': {
        'label': 'All Payments',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/payments-all.html',
        'method': 'GET',
        'path': {
          template: '/payments{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/All'),
      },
      'for_account': {
        'label': 'Payments for Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/payments-for-account.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}/payments{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForAccount'),
      },
      'for_ledger': {
        'label': 'Payments for Ledger',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/payments-for-ledger.html',
        'method': 'GET',
        'path': {
          template: '/ledgers/{ledger}/payments{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForLedger'),
      },
      'for_transaction': {
        'label': 'Payments for Transaction',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/payments-for-transaction.html',
        'method': 'GET',
        'path': {
          template: '/transactions/{transaction}/payments{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForTransaction'),
      }
    }
  },
  'transactions': {
    'label': 'Transactions',
    'endpoints': {
      'all': {
        'label': 'All Transactions',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/transactions-all.html',
        'method': 'GET',
        'path': {
          template: '/transactions{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/All'),
      },
      'single': {
        'label': 'Single Transaction',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/transactions-single.html',
        'method': 'GET',
        'path': {
          template: '/transactions/{transaction}',
        },
        'setupComponent': require('../components/SetupPanes/SingleTransaction'),
      },
      'create': {
        'label': 'Post Transaction',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/transactions-create.html',
        'method': 'POST',
        'disableStreaming': true,
        'path': {
          template: '/transactions',
        },
        'setupComponent': require('../components/SetupPanes/PostTransaction'),
      },
      'for_account': {
        'label': 'Transactions for Account',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/transactions-for-account.html',
        'method': 'GET',
        'path': {
          template: '/accounts/{account_id}/transactions{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForAccount'),
      },
      'for_ledger': {
        'label': 'Transactions for Ledger',
        'helpUrl': 'https://www.rover.network/developers/orbit/reference/endpoints/transactions-for-ledger.html',
        'method': 'GET',
        'path': {
          template: '/ledgers/{ledger}/transactions{?cursor,limit,order}',
        },
        'setupComponent': require('../components/SetupPanes/ForLedger'),
      }
    }
  }
};
