import {
  ServiceRegistered as ServiceRegisteredEvent,
  ServiceUnregistered as ServiceUnregisteredEvent,
} from "../generated/ServiceRegistry/ServiceRegistry"
import {
  ServiceRegistered,
  ServiceUnregistered,
  Indexer
} from "../generated/schema"

export function handleServiceRegistered(event: ServiceRegisteredEvent): void {
  let entity = new ServiceRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.indexer = event.params.indexer
  entity.url = event.params.url
  entity.geohash = event.params.geohash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let indexer = Indexer.load(event.params.indexer)
  if(indexer === null) {
    indexer = new Indexer(event.params.indexer)
    indexer.url = event.params.url
    indexer.geohash = event.params.geohash
  }
  indexer.registeredAtBlock = entity.blockNumber
  indexer.registeredAtTimestamp = entity.blockTimestamp
  indexer.registeredAtTransaction = entity.transactionHash
  indexer.active = true

  indexer.save()
  entity.save()
}

export function handleServiceUnregistered(
  event: ServiceUnregisteredEvent
): void {
  let entity = new ServiceUnregistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.indexer = event.params.indexer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  let indexer = Indexer.load(event.params.indexer)
  if (indexer) {
    indexer.unregisteredAtBlock = entity.blockNumber
    indexer.unregisteredAtTimestamp = entity.blockTimestamp
    indexer.unregisteredAtTransaction = entity.transactionHash
    indexer.active = false
    
    indexer.save()
  }

  entity.save()
}
