import Darkso from "./darkso";

export const buy_pack = async (
    darkso : Darkso
): Promise<any> => {
    const darksoNFTContract = darkso.contracts.getDarksoNFTContract()
    const amountWithDecimals = 10
    const gasOptions = await darkso.estimateTxGas(
        darksoNFTContract.estimateGas.mint_pack_withBnb({value: amountWithDecimals})
    );
    return await darksoNFTContract.estimateGas.mint_pack_withBnb({
        ...gasOptions,
        value: amountWithDecimals
      });

}