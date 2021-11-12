import React, { useCallback } from 'react'
import classNames from 'classnames'
//import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import styles from './NFTPagination.module.css'
import {
} from 'decentraland-ui'

import { Props } from './NFTPagination.type'

const NFTPagination = (props: Props) => {
    const {
        page,
        size,
        onBrowser
    } = props

    const page_size = parseInt(process.env.PAGE_SIZE || '20')
    const prev_disabled: boolean = page == 1
    const next_disabled : boolean = page == page/page_size

    
    const handlePrevPage = useCallback(
        () => onBrowser({ page_num: page - 1 }),
        [onBrowser]
    )
    const handleNextPage = useCallback(
        () => onBrowser({ page_num: page + 1 }),
        [onBrowser]
    )

    return (
        <>
            <div className="">
                <div className={classNames(styles.prev, {
                    [styles.disabled]: !!prev_disabled
                })}
                onClick={handlePrevPage}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-d6982a0e=""><path d="M3 11.996L9 6L10.41 7.42L6.85 10.976H21V12.976H6.81L10.41 16.58L9 18L3 11.996Z" data-v-d6982a0e=""></path></svg>
                </div>
                <div className="page-num">
                    page {page} of {size/page_size}
                </div>
                <div className={classNames(styles.next, { 
                    [styles.disabled]: !!next_disabled
                })}
                onClick={handleNextPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" data-v-d6982a0e=""><path d="M21 12.004L15 18L13.59 16.58L17.15 13.024H3V11.024H17.19L13.59 7.42L15 6L21 12.004Z" data-v-d6982a0e=""></path></svg>
                </div>
            </div>
        </>
    )

}

export default React.memo(NFTPagination)
