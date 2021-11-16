import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Props } from './WearableTags.types'
import './WearableTags.css'

const WearableTags = (props: Props) => {
  const { asset } = props

  type color = {
    [key: string]: string
  }


  const colorByRarity: color = {
    //"": '#FFB626',
    "legendary": '#842DDA',
    "common": '#3D85E6',
    "rare": '#36CF75'
    // [Rarity.UNCOMMON]: '#ED6D4F',
    // [Rarity.COMMON]: '#ABC1C1',
  }


  const colorByType: color = {

    "hero": '#FFB626',
    "discipline": '#ED6D4F'
  }
  return (
    <div className="WearableTags tags">
      <div
        title={t(`asset.rarity`)}
        className="rarity"
        style={{ backgroundColor: colorByRarity[asset.rarity] }}
      >
        {t(`asset.${asset.rarity}`)}
      </div>

      <div
        title={t(`asset.token_type`)}
        className="token_type"
        style={{ backgroundColor: colorByType[asset.token_type] }}
      >
        {t(`asset.${asset.token_type}`)}
      </div>

      <div
        title={t(`asset.train`)}
        className="train"
        style={{ backgroundColor: "ABC1C1"}}
      >
        {asset.training}
      </div>
    </div>
  )
}

export default WearableTags
