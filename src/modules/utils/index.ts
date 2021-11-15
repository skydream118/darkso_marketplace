import { NFT } from '../nft/types'
export const buy_pack = (address: string) => {
    const pack: NFT = {
        token_id: "2",
        name: "Sarah",
        token_type: "hero",
        rarity: "common",
        training: 4,
        strength: 90,
        defense: 90,
        owner: address
    };
    return pack
}

export const training = (first: string, second: string) => {

     if (first && second) {
     }
        const newNFT: NFT = {
            token_id: "2",
            name: "Sarah",
            token_type: "hero",
            rarity: "common",
            training: 4,
            strength: 90,
            defense: 90
        };
        return newNFT
    //}
}

export const buy_nft = (token_id: string, price: string) => {
    if(price){

    }
    return {token_id, error : undefined}
}
export const enable_NftSale = (token_id: string, price: string) => {
    if(price && token_id){

    }
    return {result: true, error : undefined}
}

export const disable_NftSale = (token_id: string ) => {
    if(token_id){

    }
    return {result: true, error : undefined}
}
