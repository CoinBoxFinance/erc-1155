/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface OwnableMockInterface extends ethers.utils.Interface {
  functions: {
    "nonOwnerCall()": FunctionFragment;
    "owner()": FunctionFragment;
    "ownerCall()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "nonOwnerCall",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ownerCall", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "nonOwnerCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerCall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class OwnableMock extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OwnableMockInterface;

  functions: {
    nonOwnerCall(overrides?: Overrides): Promise<ContractTransaction>;

    "nonOwnerCall()"(overrides?: Overrides): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    ownerCall(overrides?: Overrides): Promise<ContractTransaction>;

    "ownerCall()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  nonOwnerCall(overrides?: Overrides): Promise<ContractTransaction>;

  "nonOwnerCall()"(overrides?: Overrides): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  ownerCall(overrides?: Overrides): Promise<ContractTransaction>;

  "ownerCall()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    nonOwnerCall(overrides?: CallOverrides): Promise<void>;

    "nonOwnerCall()"(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    ownerCall(overrides?: CallOverrides): Promise<void>;

    "ownerCall()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    nonOwnerCall(overrides?: Overrides): Promise<BigNumber>;

    "nonOwnerCall()"(overrides?: Overrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    ownerCall(overrides?: Overrides): Promise<BigNumber>;

    "ownerCall()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    nonOwnerCall(overrides?: Overrides): Promise<PopulatedTransaction>;

    "nonOwnerCall()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerCall(overrides?: Overrides): Promise<PopulatedTransaction>;

    "ownerCall()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
