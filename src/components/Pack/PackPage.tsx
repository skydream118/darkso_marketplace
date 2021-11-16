import React, { useCallback, useState } from 'react'
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
import { NFT } from '../../modules/nft/types'
import useDarkso from '../../hook/useDarkso'
import Darkso from '../../darkso'
import './PackPage.css'


const PackPage = (props: Props) => {
    const {
        pack_state, onBuyPack,onBuySuccess
    } = props
    const { loading, error, pack_id } = pack_state;

    const darkso = useDarkso()
    
    const [start, setStart] = useState(false)

    const context = useWeb3React<Web3Provider>()
    const { connector, account, active } = context
    // useEffect(() => {
         if (darkso) {
            const darksoNFTContract = darkso?.contracts.getDarksoNFTContract()
            darksoNFTContract.on("NewDARKToken", (tokenId, name, type, tarity, training, strength, defense, startTime) => {
                if(loading){
                    console.log("NewDARKToken");

                    if (type.toNumber() == 1) {
                        type = "hero"
                    } else {
                        type = "discipline"
                    }

                    switch (tarity.toNumber()) {
                        case 1:
                            tarity = "common"
                            break;
                        case 2:
                            tarity = "rare"
                            break;
                        case 3:
                            tarity = "legendary"
                            break;
                    }

                    const nft: NFT = {
                        token_id: tokenId.toString(),
                        name: name,
                        token_type: type,
                        rarity: tarity,
                        training: training.toNumber(),
                        strength: strength.toNumber(),
                        defense: defense.toNumber(),
                        start_time: startTime.toNumber()
                    }
                    onBuySuccess(nft)
                }
            })
        }
//    }, [])

    const handleBuyPack = useCallback(
        () => {
            const connected = injected === connector;
            if (connected && active && account) {
                setStart(true)
                onBuyPack(darkso as Darkso)
            } else {
                console.log("-- connect wallet -- pack")
            }
        },
        [onBuyPack]
    )

    return (
        <>
            <Navigation activeTab={NavigationTab.PACK} />
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
                                    <span className="big">80</span>
                                    <span className="small">$</span>
                                </div>
                                <div className="btn-group">

                                    {loading ? (
                                        <>
                                            <div className="overlay" />
                                            <Loader size="massive" active />
                                        </>
                                    ) : (
                                        <button className="el-button el-button--primary el-button--large btn" onClick={() => handleBuyPack()}>
                                            <span>Buy</span>
                                        </button>
                                    )}
                                </div>
                                {start && error ? (
                                    <div className="error">
                                        {error}
                                    </div>
                                ) : null}
                                {!error && start && !loading ? (
                                    <div className="success">
                                        Pack Name : {pack_id}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )

}

export default React.memo(PackPage)
