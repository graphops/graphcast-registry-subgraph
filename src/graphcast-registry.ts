import {
  AdminChange as AdminChangeEvent,
  Initialized as InitializedEvent,
  SetGossipOperator as SetGossipOperatorEvent
} from "../generated/GraphcastRegistry/GraphcastRegistry"
import {
  AdminChange,
  Initialized,
  SetGossipOperator
} from "../generated/schema"

export function handleAdminChange(event: AdminChangeEvent): void {
  let entity = new AdminChange(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin

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

export function handleSetGossipOperator(event: SetGossipOperatorEvent): void {
  let entity = new SetGossipOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.indexer = event.params.indexer
  entity.operator = event.params.operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
