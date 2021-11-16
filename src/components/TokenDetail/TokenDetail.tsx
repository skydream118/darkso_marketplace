import React, { useCallback, useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import classNames from 'classnames'
import { Navigation } from '../Navigation'
import { NavigationTab } from '../Navigation/Navigation.types'
import { Navigation as AccountNav } from '../Account/Navigation'
import { NavigationTab as AccountNavTab } from '../Account/Navigation/Navigation.types'

import { useHistory } from 'react-router'
import styles from './TokenDetail.module.css'

//import { t } from 'decentraland-dapps/dist/modules/translation/utils'

// import {
//     Card, 
//     Loader
// } from 'decentraland-ui'

import { Props } from './TokenDetail.types'

const TokenDetailPage = (props: Props) => {
    const {
        nft,
        isTrain,
        isFinished,
        onSetTrainer,
        err,
        //loading,
        onBUY,
        onEnableSale,
        onDisableSale,
        onReset
    } = props

    const context = useWeb3React<Web3Provider>()

    const [price, setPrice] = useState('0');

    const { account } = context

    let isAccountAsset = false
    if (account && nft?.owner == account) {
        isAccountAsset = true
    }

    const training = (nft?.training ? nft.training : 0) / 4 * 100
    const strength = (nft?.training ? nft.training : 0) / 180 * 100
    const defence = (nft?.training ? nft.training : 0) / 180 * 100

    const history = useHistory();

    React.useEffect(() => {
        if(isFinished && !err){
            alert("success")
            onReset()
        }
        if(err){
            alert(err)
            onReset()
        }
        },[]
    )

    const handleTraining = useCallback(
        () => onSetTrainer(nft?.token_id as string),
        [onSetTrainer]
    )

    const handleBUY = useCallback(
        () => {
            setPrice(nft?.price as string)
            onBUY(nft?.token_id as string ,price)      
        },[]
    )
    const handleEnableSale = useCallback(
        () => {
            onEnableSale(nft?.token_id as string, price)
        },[]
    )
    const handleDisableSale = useCallback(
        () => {
            onDisableSale(nft?.token_id as string)

        },[]
    )

    return (
        <>
            <Navigation activeTab={NavigationTab.MARKET} />
            {isAccountAsset ? (
                <AccountNav activeTab={AccountNavTab.MYASSET} />
            ) : null}

            <main className="main">
                <div className="flex-center">
                    <div className="h-main-wrapper">

                        <div className="flex detail-content">
                            <div className="detail-right">
                                <div className="page-title flex-middle el-main--headerTitle">
                                    <div className="back-box" onClick={() => history.goBack()}>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJzSURBVHgBtZZBTBNREIbnbV9JtB40JniC1IsnlHpqxTUpcJXARQMJhiZwBvWKCTVRuAmc9EJikMTGk1ivro1WoCdX5eTBNsSLJCYeQA64O848WKJr99mmu1/ystmdt/u/eTPzdgT4MM1cFoUziCCGADEJTSJA2PSeHY/H7pZKj2t/2w7JZnMn9x2cQXRvQkgIAQvv3j659Y9Yjzn6nm5TEDLsaVwaveTlD4MfXL4yNh+FEIOAqX3HmVHCmUwuaUinChFjAPYaRvxAVUd7+2no6joHreCCMUSCqN2+dDoFC/PTSrAlEAelLlYjw1dhmEYoCEjKINvE+DUYGOg/uj/v28bd3T0aP2F7+7saDen1mDfQ/3Bycgz6+y5Bo1SrX+FF8RVY1rp2Xl3PlpaewYnEMRUvj0rFhi/0UT+cOOz1FC3wDMX1aeElNCXGWzQ790jFa+QwZhuVD4Er5+S5f++2mr9DW1ssWnXnGaChQKvUrdSDYzZ954G6ToxfD8zcWEdnd173oc3Nz2qwt7pEOEiYPcjQ1vOV3/Gj9cwv+D84rpyhmXR3XXtDYo3CHu3QSCSOQ+RiDGcxexe5GCcGe/UtILahinlHW4XKJFIxrkc+dThjg+pRQovwCdJHIizEseJ6C0KigJpASPoN3qmgI0HJ4GUen4+zcw81tShsKVCs0s9mqp4ZQQ+n+SeqP8vaUDWmhTouYZqjWRfEa4gYV8bOxra2PtY6Oi+c4nYEIgMX198sF1Q2tkmZ5z2FSBD2WnlF9aJKjHu6tfLyRV4BhAoutlHPeCTrN3NrJ+K/8gINOk2x+V5SiBqgu0pePC+XV0p/mn4Dlxj99soqZQ4AAAAASUVORK5CYII="
                                            alt="Go back" />
                                    </div>
                                    Details
                                </div>
                                <div className="img-box">
                                    <img src="Aurora.png" className="pic" />
                                </div>
                                <div className="game-detail">
                                    <div className="header-block flex-middle">
                                        DARKSO NFT ID : {nft?.token_id}
                                    </div>
                                    <div className="attributes-block">
                                        <div className="row tit flex-middle">
                                            <div className="label">
                                                Name
                                            </div>
                                            <div className="value flex-item text-r">
                                                {nft?.name}
                                            </div>
                                        </div>

                                        <div className="row tit flex-middle">
                                            <div className="label">
                                                Token Type
                                            </div>
                                            <div className="value flex-item text-r">
                                                {nft?.token_type}
                                            </div>
                                        </div>

                                        <div className="row tit flex-middle">
                                            <div className="label">
                                                Rarity
                                            </div>
                                            <div className="value flex-item text-r">
                                                {nft?.rarity}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="label flex-between">
                                                Training
                                                <span className="num">{nft?.training}</span>
                                            </div>
                                            <div className="value">
                                                <div className="line">
                                                    <span className="line-pro" style={{ "width": `${training}%` }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="label flex-between">
                                                strength
                                                <span className="num">{nft?.strength}</span>
                                            </div>
                                            <div className="value">
                                                <div className="line">
                                                    <span className="line-pro" style={{ "width": `${strength}%` }}></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="label flex-between">
                                                defence
                                                <span className="num">{nft?.defense}</span>
                                            </div>
                                            <div className="value">
                                                <div className="line">
                                                    <span className="line-pro" style={{ "width": `${defence}%` }}></span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="detail-left flex-item">
                                <div className="small-title">Price</div>
                                <div className="price flex">
                                    <span className="big">{nft?.onSale ? nft?.price : 0}</span>
                                    <span className="small">DARKSO</span>
                                </div>
                                <div className="btn-group">
                                    {isTrain ? (
                                        <button
                                            className={classNames(styles.button, {
                                                [styles.disabled]: nft?.training == 0,
                                                [styles.active]: nft ? nft.training > 0 : false
                                            })}
                                            onClick={() => handleTraining}>
                                            <span>Training</span>
                                        </button>
                                    ) : (
                                        isAccountAsset ? (
                                            nft?.onSale ? (
                                                <button className="el-button" onClick={() => handleDisableSale}>
                                                    <span>disable on-sale</span>
                                                </button>
                                            ) : (
                                                <div>
                                                    <input type="text" placeholder="type your NFT price" onChange={(e) => setPrice(e.target.value)} />

                                                    <button className="el-button" onClick={() => handleEnableSale}>
                                                        <span>enable on-sale</span>
                                                    </button>
                                                </div>
                                            )

                                        ) : (
                                            nft?.onSale ? (
                                                <button className="el-button" onClick={() => handleBUY}>
                                                    <span>Buy</span>
                                                </button>
                                            ) : (
                                                null
                                            )
                                        )
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )

}


export default React.memo(TokenDetailPage)
