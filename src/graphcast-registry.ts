import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Initialized as InitializedEvent,
  SetGraphcastID as SetGraphcastIDEvent
} from "../generated/GraphcastRegistry/GraphcastRegistry"
import {
  OwnershipTransferred,
  Initialized,
  SetGraphcastID,
  Indexer
} from "../generated/schema"

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetGraphcastID(event: SetGraphcastIDEvent): void {
  let entity = new SetGraphcastID(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.indexer = event.params.indexer
  entity.graphcastID = event.params.graphcastID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let indexer = Indexer.load(event.params.indexer)!
  indexer.graphcastID = event.params.graphcastID;
  indexer.save()
}
