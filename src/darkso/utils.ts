import Darkso from "./darkso";
import { BigNumber } from 'bignumber.js'
//import { Contract } from '@ethersproject/contracts'
// import { NFT } from "../modules/nft/types";
// import { buyPackSuccess } from "../modules/pack/actions";
// import { resolve } from "dns";

export const buy_pack = async (
    darkso: Darkso
): Promise<any> => {
    const darksoNFTContract = darkso.contracts.getDarksoNFTContract()

    const BNB = new BigNumber(10).pow(18)
    const amountWithDecimals = new BigNumber(0.1).times(BNB).toString();
    const gasOptions = await darkso.estimateTxGas(
        darksoNFTContract.estimateGas.mint_pack_withBnb({ value: amountWithDecimals })
    );
    return await darksoNFTContract.mint_pack_withBnb({
        ...gasOptions,
        value: amountWithDecimals
    });
    //    return darksoNFTContract    
}

export const training_new = async (
    darkso: Darkso,
    first : string,
    second : string
): Promise<any> => {
    const darksoNFTContract = darkso.contracts.getDarksoNFTContract()

    const BNB = new BigNumber(10).pow(18)
    const amountWithDecimals = new BigNumber(0.05).times(BNB).toString();
    const gasOptions = await darkso.estimateTxGas(
        darksoNFTContract.estimateGas.TrainingDARK(new BigNumber(first), new BigNumber(second), { value: amountWithDecimals })
    );
    return await darksoNFTContract.TrainingDARK(new BigNumber(first), new BigNumber(second),{
        ...gasOptions,
        value: amountWithDecimals
    });
    //    return darksoNFTContract    
}