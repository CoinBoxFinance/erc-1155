/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC1155MintBurnInterface extends Interface {
  functions: {
    balanceOf: TypedFunctionDescription<{
      encode([_owner, _id]: [string, BigNumberish]): string;
    }>;

    balanceOfBatch: TypedFunctionDescription<{
      encode([_owners, _ids]: [(string)[], (BigNumberish)[]]): string;
    }>;

    isApprovedForAll: TypedFunctionDescription<{
      encode([_owner, _operator]: [string, string]): string;
    }>;

    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        (BigNumberish)[],
        (BigNumberish)[],
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    setApprovalForAll: TypedFunctionDescription<{
      encode([_operator, _approved]: [string, boolean]): string;
    }>;

    supportsInterface: TypedFunctionDescription<{
      encode([_interfaceID]: [Arrayish]): string;
    }>;
  };

  events: {
    ApprovalForAll: TypedEventDescription<{
      encodeTopics([_owner, _operator, _approved]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    TransferBatch: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _ids, _amounts]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    TransferSingle: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _id, _amount]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class ERC1155MintBurn extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC1155MintBurn;
  attach(addressOrName: string): ERC1155MintBurn;
  deployed(): Promise<ERC1155MintBurn>;

  on(event: EventFilter | string, listener: Listener): ERC1155MintBurn;
  once(event: EventFilter | string, listener: Listener): ERC1155MintBurn;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1155MintBurn;
  removeAllListeners(eventName: EventFilter | string): ERC1155MintBurn;
  removeListener(eventName: any, listener: Listener): ERC1155MintBurn;

  interface: ERC1155MintBurnInterface;

  functions: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<(BigNumber)[]>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    supportsInterface(_interfaceID: Arrayish): Promise<boolean>;
  };

  balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

  balanceOfBatch(
    _owners: (string)[],
    _ids: (BigNumberish)[]
  ): Promise<(BigNumber)[]>;

  isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: (BigNumberish)[],
    _amounts: (BigNumberish)[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  supportsInterface(_interfaceID: Arrayish): Promise<boolean>;

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (BigNumberish)[]
    ): Promise<BigNumber>;

    isApprovedForAll(_owner: string, _operator: string): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (BigNumberish)[],
      _amounts: (BigNumberish)[],
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;

    supportsInterface(_interfaceID: Arrayish): Promise<BigNumber>;
  };
}
