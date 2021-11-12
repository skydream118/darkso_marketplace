import React, { useCallback } from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'

import {
    Dropdown,
    DropdownProps,
    Responsive,
} from 'decentraland-ui'

import { Props } from './NFTFilters.type'
import { SortBy } from '../../modules/nft/types'

const NFTFilters = (props: Props) => {
    const {
        sortBy,
        size,
        onBrowser
    } = props

    const sortBydropdownOptions = [
        { value: SortBy.CHEAPEST, text: t('filters.cheapest') },
        { value: SortBy.DEFENCE, text: t('filters.defence') },
        { value: SortBy.HIGHEST, text: t('filters.highest') },
        { value: SortBy.NEWEST, text: t('filters.newest') },
        { value: SortBy.STRENGTH, text: t('filters.strength') },
        { value: SortBy.TRAINING, text: t('filters.training') }
    ]

    const handleOrderByDropdownChange = useCallback(
        (_, props: DropdownProps) => {
            onBrowser({ sort: props.value as SortBy })
        },
        [onBrowser]
    )
    return (
        <>
            <div className="NFTFilters">
                <div className="topbar">
                    <div className="">total result : {size}</div>
                    <Responsive
                        minWidth={Responsive.onlyTablet.minWidth}
                        className="topbar-filter"
                    >
                        <Dropdown
                            direction="left"
                            value={sortBy}
                            options={sortBydropdownOptions}
                            onChange={handleOrderByDropdownChange}
                        />
                    </Responsive>
                </div>
            </div>
        </>
    )

}

export default React.memo(NFTFilters)
