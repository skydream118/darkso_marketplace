import React, { useCallback,useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import { Navigation } from '../Navigation'
import { NavigationTab } from '../Navigation/Navigation.types'
//import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Props } from './TrainingPage.type'
import pack from '../../images/nft/pack.png'
import { injected } from '../../modules/wallet/connectors'
import { NFT } from '../../modules/nft/types'
import {
    Loader
} from 'decentraland-ui'
import { AssetCard } from '../AssetCard'
import { locations } from '../../modules/routing/locations'

const TrainingPage = (props: Props) => {
    const {
        training_state, nfts, onEnableTrain, onSetFirst, onSetSecond, onTrainingRequest, onNavigate, onReset
    } = props
    const { first_trainer_id, second_trainer_id, loading,train_id,error } = training_state;

    // export type TrainUIState = {
    //     isTrain: boolean,
    //     loading: boolean,
    //     isFirst : boolean,
    //     isSecond : boolean,
    //     first_trainer_id : string | null,
    //     second_trainer_id : string | null,
    //     train_id : string | null,
    //     error: string | null
    //   }
    // let firstNFT : NFT | undefined = undefined;
    // let secondNFT : NFT | undefined = undefined;
    // if(first_trainer_id) 

    const firstNFT = first_trainer_id ? nfts.find(nft => nft.token_id == first_trainer_id) : undefined
    const secondNFT = second_trainer_id ? nfts.find(nft => nft.token_id == second_trainer_id) : undefined

    const context = useWeb3React<Web3Provider>()
    const { connector, account, active } = context
    //let isStart = false;

    const handleTraining = useCallback(
        () => {
            const connected = injected === connector;
            if (connected && active && account) {

                if (first_trainer_id && second_trainer_id) {
                    onTrainingRequest(first_trainer_id, second_trainer_id)
                } else {
                    alert("select heros for training")
                }

            } else {
                alert("connect wallet")
            }
        },
        [onTrainingRequest]
    )

    const handleSetHero = useCallback(
        (isFirst) => {
            onEnableTrain(true)
            if (isFirst) {
                onSetFirst()
                onNavigate(locations.myasset())
            } else {
                onSetSecond()
            }
        },
        [onSetFirst, onSetSecond]
    )
 
  useEffect(() => {
      if(train_id && !error){
          alert("training success")
          onReset()
      }
      if(error){
          alert("training error")
          onReset()
      }
  }, [])

    return (
        <>
            <Navigation activeTab={NavigationTab.PACK} />
            <div className="page-title flex-middle el-main--headerTitle flex-center">
                Select masters to train a disciple
            </div>
            <main className="main">
                <div className="flex-center">
                    <div className="h-main-wrapper">
                        <div className="flex detail-content">
                            <div className="detail-right">

                                <div className="img-box" onClick={() => handleSetHero(true)}>

                                    {first_trainer_id ? (
                                        <AssetCard
                                            key={firstNFT?.token_id}
                                            asset={firstNFT as NFT}
                                        />
                                    ) : null}

                                </div>
                            </div>
                            <div className="detail-right">
                                <div className="img-box" onClick={() => handleSetHero(false)}>
                                    {second_trainer_id ? (
                                        <AssetCard
                                            key={secondNFT?.token_id}
                                            asset={secondNFT as NFT}
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-center disciple" onClick={() => handleTraining}>
                        {loading ? (
                            <Loader></Loader>
                        ) : null}
                        <button className="btn">Train</button>
                    </div>
                    <div className="flex flex-center disciple">

                        <div className="img-box">
                            <AssetCard
                                key={0}
                                asset={undefined}
                            />
                        </div>
                    </div>

                </div>
            </main>

        </>
    )

}

export default React.memo(TrainingPage)
