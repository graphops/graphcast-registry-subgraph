import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Initialized,
  SetGraphcastID
} from "../generated/GraphcastRegistry/GraphcastRegistry"

export function createOwnershipTransferredEvent(previsouOwner: Address, newOwner: Address): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("previousOwner", ethereum.Value.fromAddress(previsouOwner)),
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
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
