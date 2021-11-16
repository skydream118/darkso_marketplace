import React, { useCallback, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { Navigation } from '../Navigation'
import { NavigationTab } from '../Navigation/Navigation.types'
//import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Props } from './PackPage.types'
import pack from '../../images/nft/pack.png'
import { injected } from '../../modules/wallet/connectors'
import {
    Loader
} from 'decentraland-ui'
import useDarkso from '../../hook/useDarkso'
import Darkso from '../../darkso'



const PackPage = (props: Props) => {
    const {
        pack_state, onBuyPack
    } = props
    const { loading, error, pack_id } = pack_state;

    const darkso = useDarkso()

    const context = useWeb3React<Web3Provider>()
    const { connector, account, active } = context
    let isStart = false;

    useEffect(()=>{
        if(darkso){
            const darksoNFT = darkso.contracts.getDarksoNFTContract()
            darksoNFT.on("NewDARKToken",(receipt)=>{
                console.log(receipt);
            })
        }
    },[])

    const handleBuyPack = useCallback(
        () => {
            const connected = injected === connector;
            if (connected && active && account) {
                isStart = true
                onBuyPack(darkso as Darkso)
            } else {
                alert("connect wallet")
            }
        },
        [onBuyPack]
    )

    return (
        <>
            <Navigation activeTab={NavigationTab.MARKET} />
            <main className="main">
                <div className="flex-center">
                    <div className="h-main-wrapper">

                        <div className="flex detail-content">
                            <div className="detail-right">
                                <div className="page-title flex-middle el-main--headerTitle">

                                    Limited Pack
                                </div>
                                <div className="img-box">
                                    <img src={pack} className="pic" />
                                </div>
                            </div>
                            <div className="detail-left flex-item">
                                <div className="small-title">Price</div>
                                <div className="price flex">
                                    <span className="big">0.15</span>
                                    <span className="small">DNB</span>
                                </div>
                                <div className="btn-group">
                                    <button className="el-button el-button--primary el-button--large btn" onClick={() => handleBuyPack}>
                                        <span>Buy</span>
                                    </button>
                                    {loading ? (
                                        <>
                                            <div className="overlay" />
                                            <Loader size="massive" active />
                                        </>
                                    ) : null}
                                </div>
                                {error?(
                                    <div className="error">
                                        {error}
                                    </div>
                                ):null}
                                {!error && isStart && !loading?(
                                    <div className="success">
                                        Pack Name : {pack_id}
                                    </div>
                                ):null}
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )

}

export default React.memo(PackPage)
