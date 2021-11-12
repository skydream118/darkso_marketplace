import { Type, Rarity } from '../../../modules/nft/types'

export type Item = {
  title: string
  description?: string
  active?: boolean
  disabled?: boolean
  type : Type | Rarity
  onClick: (type : Type | Rarity) => any
}

export type Props = {
  header: string
  className?: string
  items: Item[]
}
