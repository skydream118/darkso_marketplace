import React from 'react'

//import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import {
    Card, 
    Loader
} from 'decentraland-ui'

import { Props } from './AssetList.type'
import { AssetCard } from '../AssetCard'

const AssetList = (props: Props) => {
    const {
        nfts,
        isloading
    } = props

    return (
        <>
            <Card.Group>
                {nfts.length > 0
                    ? nfts.map((nft, index) => (
                        <AssetCard
                            key= {index}
                            asset={nft}
                        />
                    ))
                    : null
                }

                {isloading ? (
                    <>
                        <div className="overlay" />
                        <Loader size="massive" active />
                    </>
                ) : null}
            </Card.Group>
        </>
    )

}

export default React.memo(AssetList)
