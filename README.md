# Graphcast Registry Subgraph

[![Docs](https://img.shields.io/badge/docs-latest-brightgreen.svg)](https://docs.graphops.xyz/graphcast/intro)

## Introduction

Graphcast is a decentralized, distributed peer-to-peer (P2P) communication tool that allows Indexers across the network to exchange information in real-time. This registry subgraph allows a user to query the registry contract and observe the indexer-to-graphcastID relationship using The Graph. 

To see the full idea behind Graphcast, you can check out the [GRC](https://forum.thegraph.com/t/grc-001-graphcast-a-gossip-network-for-indexers/3544/8) for it.

### Endpoints

| Network         | Registry Contract                                           | Subgraph Playground                                             | Subgraph API                                                  |
| --------------- | ----------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------- |
| Ethereum-mainnet   | [0x89f97698d6006f25570cd2e31737d3d22aedcbcf](https://etherscan.io/address/0x89f97698d6006f25570cd2e31737d3d22aedcbcf) | [Link](https://thegraph.com/hosted-service/subgraph/hopeyen/graphcast-registry-mainnet) | [Link](https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-mainnet) |
| Ethereum-goerli   | [0x26ebbA649FAa7b56FDB8DE9Ea17aF3504B76BFA0](https://goerli.etherscan.io/address/0x26ebbA649FAa7b56FDB8DE9Ea17aF3504B76BFA0) | [Link](https://thegraph.com/hosted-service/subgraph/hopeyen/graphcast-registry-goerli) | [Link](https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-goerli) |
| Arbitrum-goerli   | [0x50c2d70a41ecefe4cc54a331457ea204ecf97292](https://goerli.arbiscan.io/address/0x50c2d70a41ecefe4cc54a331457ea204ecf97292) | [Link](https://thegraph.com/hosted-service/subgraph/hopeyen/graphcast-registry-arbitrum-go) | [Link](https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-arbitrum-go) |
| Arbitrum-one   | [0xfae79e8cb8fbac2408e5baf89262bd92b6ca464a](https://arbiscan.io/address/0xfae79e8cb8fbac2408e5baf89262bd92b6ca464a) | [Link](https://thegraph.com/hosted-service/subgraph/hopeyen/graphcast-registry-arb-one) | [Link](https://api.thegraph.com/subgraphs/name/hopeyen/graphcast-registry-arb-one) |

## Features

This subgraph provides information on both the Indexer registration status and the GraphcastID registration status, specifically mapping the indexer registered on The Graph service registry contract to GraphcastID registered on the Graphcast registry contract.  

You can try out the subgraph at the explorer [playground](https://thegraph.com/hosted-service/subgraph/hopeyen/graphcast-registry-goerli).

Following the subgraph schema, you can make example queries such as below

```
query   indexer(id:"0xe9a1cabd57700b17945fd81feefba82340d9568f"){
    graphcastID
  }
  indexers(where:{graphcastID:"0x2bc5349585cbbf924026d25a520ffa9e8b51a39b"}){
    id
    graphcastID
    registeredAtTimestamp
    registeredAtTransaction
    unregisteredAtBlock
  }
  serviceRegistereds(first: 5) {
    indexer
    blockNumber
  }
  ownershipTransferreds(first: 5) {
    blockNumber
    owner
  }
```

## Quickstart

Follow the Graph [How to create a subgraph](https://thegraph.com/docs/en/developing/creating-a-subgraph/) guide to develop and deploy the subgraph.

## Contributing

We welcome and appreciate your contributions! Please see the [Contributor Guide](/CONTRIBUTING.md), [Code Of Conduct](/CODE_OF_CONDUCT.md) and [Security Notes](/SECURITY.md) for this repository.
