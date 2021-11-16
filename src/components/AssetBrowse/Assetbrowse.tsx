import React, { useCallback, useEffect } from 'react'
import { Page } from 'decentraland-ui'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import { Props } from './Assetbrowse.types'
import { Column } from '../Layout/Column'
import { Row } from '../Layout/Row'
import { ToggleBox } from './ToggleBox'

import { Type, Rarity } from '../../modules/nft/types'
import { NFTFilters } from '../NFTFilters'
import { AssetList } from '../AssetList'
import { NFTPagination } from '../NFTPagination'
import './Assetbrowse.css'

const AssetBrowse = (props: Props) => {

    const { page, nfts_state, type, rarity, account, sortBy, onGetNFTs, onBrowse } = props
    const { nfts, loading, size } = nfts_state

    useEffect(() => {
        onGetNFTs({
            page_num: page,
            sort: sortBy,
            rarity : rarity,
            type : type,
            account_addr : account 
        })
    }, [page, sortBy, rarity, type, account])

    const handleBrowseType = useCallback(
        (type: Type | Rarity) => onBrowse({ type: type as Type | undefined}),
        [onBrowse]
    )

    const handleBrowseRarity = useCallback(
        (rarity: Rarity | Type) => onBrowse({ rarity: rarity as Rarity | undefined }),
        [onBrowse]
    )

    return (
        <>
            <Page className="AssetBrowse">
                <Row>
                    <Column align="left" className="sidebar">
                        <ToggleBox
                            className="result-type-toggle"
                            header={t('filters.type')}
                            items={[
                                {
                                    title: t(
                                        'filters.all'
                                    ),
                                    active: type === Type.ALL,
                                    type: Type.ALL,
                                    onClick: handleBrowseType
                                },
                                {
                                    title: t(
                                        'asset.hero'
                                    ),
                                    active: type === Type.HERO,
                                    type: Type.HERO,
                                    onClick: handleBrowseType
                                },
                                {
                                    title: t(
                                        'asset.discipline'
                                    ),
                                    active: type === Type.DISCIPLINE,
                                    type: Type.DISCIPLINE,
                                    onClick: handleBrowseType
                                },
                            ]}
                        />

                        <ToggleBox
                            className="result-type-toggle"
                            header={t('asset.rarity')}
                            items={[
                                {
                                    title: t(
                                        'filters.all'
                                    ),
                                    active: rarity === Rarity.ALL,
                                    type: Rarity.ALL,
                                    onClick: handleBrowseRarity
                                },
                                {
                                    title: t(
                                        'asset.common'
                                    ),
                                    active: rarity === Rarity.COMMON,
                                    type : Rarity.COMMON,
                                    onClick: handleBrowseRarity
                                },
                                {
                                    title: t(
                                        'asset.rare'
                                    ),
                                    active: rarity === Rarity.RARE,
                                    type : Rarity.RARE,
                                    onClick: handleBrowseRarity
                                },
                                {
                                    title: t(
                                        'asset.legendary'
                                    ),
                                    active: rarity === Rarity.LEGENDARY,
                                    type : Rarity.LEGENDARY,
                                    onClick: handleBrowseRarity
                                },
                            ]}
                        />
                    </Column>
                    <Column align="right">
                        <NFTFilters
                            sortBy = {sortBy}
                            size = {size}
                            onBrowser = {onBrowse}
                        ></NFTFilters>
                        <AssetList
                            nfts = {nfts}
                            isloading = {loading} 
                        />
                        <NFTPagination
                            page = {page}
                            size = {size}
                            onBrowser = {onBrowse}
                        ></NFTPagination>
                    </Column>
                </Row>
            </Page>
        </>
    )
}

export default React.memo(AssetBrowse);