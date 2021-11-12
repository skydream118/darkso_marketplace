export type NFT = {
	token_id: string
	name: string
	token_type : string
	rarity: string
	training : number
	strength : number
	defense : number
	price: string
}

export enum SortBy {
    NEWEST = 'newest',
    TRAINING = 'training',
    DEFENCE = 'defense',
    STRENGTH = 'strength',
    HIGHEST = 'highest',
    CHEAPEST = 'cheapest'
  }

export enum Rarity{
  ALL = 'all',
  COMMON = 'common',
  RARE = 'rare',
  LEGENDARY = 'legendary'  
}

export enum Type {
    ALL = 'all',
    HERO = 'hero',
    DISCIPLINE = 'discipline'
}

export type NFTsSearchOption = {
    sort? : SortBy,
    page_num? : number,
    account_addr?: string,
    rarity? : Rarity,
    type? : Type
}