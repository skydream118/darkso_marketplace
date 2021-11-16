import { NFT } from '../../../modules/nft/types'

export type Props = {
  title: string
  assets: NFT[]
  isSubHeader?: boolean
  isLoading: boolean
  isView: boolean
  onViewAll: () => void
}
