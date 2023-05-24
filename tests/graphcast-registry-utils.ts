import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  SetStaking,
  Initialized,
  SetGraphcastID
} from "../generated/GraphcastRegistry/GraphcastRegistry"

export function createOwnershipTransferredEvent(newOwner: Address): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetStakingEvent(address: Address): SetStaking {
  let setStakingEvent = changetype<SetStaking>(newMockEvent())

  setStakingEvent.parameters = new Array()

  setStakingEvent.parameters.push(
    new ethereum.EventParam("address", ethereum.Value.fromAddress(address)),
  )

  return setStakingEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createSetGraphcastIDEvent(
  indexer: Address,
  graphcastID: Address
): SetGraphcastID {
  let setGraphcastIDEvent = changetype<SetGraphcastID>(newMockEvent())

  setGraphcastIDEvent.parameters = new Array()

  setGraphcastIDEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  setGraphcastIDEvent.parameters.push(
    new ethereum.EventParam("graphcastID", ethereum.Value.fromAddress(graphcastID))
  )

  return setGraphcastIDEvent
}
