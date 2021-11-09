import { NFT } from '../../../modules/dashboard/types'

export type Props = {
  title: string
  assets: NFT[]
  isSubHeader?: boolean
  isLoading: boolean
  isView: boolean
  onViewAll: () => void
}
