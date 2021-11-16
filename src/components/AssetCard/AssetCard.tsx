import React from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Link } from 'react-router-dom'
import { Card } from 'decentraland-ui'
import { NFT } from '../../modules/nft/types'

import { WearableTags } from './WearableTags'
import { AssetImage } from '../AssetImage'
import { Props } from './AssetCard.types'
import './AssetCard.css'

const AssetCard = (props: Props) => {
  const { asset } = props;
  return (
    <Card className="AssetCard" link as={Link} to={`token/details/${asset?.token_id}`}>
      <AssetImage asset={asset}/>
      <Card.Content>
        <Card.Header>
          <div className="title">{t(`asset.${asset?.name}`)}</div>
          {asset?.price ? (
            asset.price
          ) : null}
        </Card.Header>
        <Card.Meta>
          {t(`asset.strength`)}{" "}{asset?.strength}
          {t(`asset.defense`)}{" "}{asset?.defense}
        </Card.Meta>
        <WearableTags asset={asset as NFT} />
      </Card.Content>
    </Card>
  )
}

export default React.memo(AssetCard)
