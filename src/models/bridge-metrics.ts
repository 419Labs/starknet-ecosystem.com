import type { BigNumber } from "ethers";

export interface BridgeMetrics {
  balance: BigNumber;
  ethValue?: number;
}
