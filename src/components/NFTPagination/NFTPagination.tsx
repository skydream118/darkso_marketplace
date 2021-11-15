import React, { useCallback } from 'react'
import classNames from 'classnames'
//import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import styles from './NFTPagination.module.css'
import { Props } from './NFTPagination.type'
import { ReactComponent as Prev } from '../../images/prev.svg'
import { ReactComponent as Next } from '../../images/next.svg'

const NFTPagination = (props: Props) => {
    const {
        page,
        size,
        onBrowser
    } = props

    const page_size = parseInt(process.env.PAGE_SIZE || '20')
    const prev_disabled: boolean = page == 1
    const next_disabled : boolean = page == Math.ceil(page/page_size)
    
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
                    <Prev/>
                </div>
                <div className="page-num">
                    page {page} of {Math.ceil(size/page_size)}
                </div>
                <div className={classNames(styles.next, { 
                    [styles.disabled]: !!next_disabled
                })}
                onClick={handleNextPage}>
                    <Next/>
                </div>
            </div>
        </>
    )

}

export default React.memo(NFTPagination)
