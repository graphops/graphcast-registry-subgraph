import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AdminChange,
  Initialized,
  SetGossipOperator
} from "../generated/GraphcastRegistry/GraphcastRegistry"

export function createAdminChangeEvent(admin: Address): AdminChange {
  let adminChangeEvent = changetype<AdminChange>(newMockEvent())

  adminChangeEvent.parameters = new Array()

  adminChangeEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )

  return adminChangeEvent
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

export function createSetGossipOperatorEvent(
  indexer: Address,
  operator: Address
): SetGossipOperator {
  let setGossipOperatorEvent = changetype<SetGossipOperator>(newMockEvent())

  setGossipOperatorEvent.parameters = new Array()

  setGossipOperatorEvent.parameters.push(
    new ethereum.EventParam("indexer", ethereum.Value.fromAddress(indexer))
  )
  setGossipOperatorEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return setGossipOperatorEvent
}
