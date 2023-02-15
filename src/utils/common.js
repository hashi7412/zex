import { NETWORKS } from "../constants/networks"
import { hexlify, concat, arrayify, zeroPad } from "ethers/lib/utils.js";
import { BigNumber } from "ethers";

export const getProviders = () => {
    const network = process.env.ZEX_APP_MAINNET ? 'mainnet' : 'testnet'
    return NETWORKS[network].rpc;
}

export const assembleSubAccountId = (account, collateral, asset, isLong) => {
    return hexlify(
      concat([
        arrayify(account),
        [arrayify(BigNumber.from(collateral))[0]],
        [arrayify(BigNumber.from(asset))[0]],
        arrayify(BigNumber.from(isLong ? 1 : 0)),
        zeroPad([], 9),
      ])
    )
}