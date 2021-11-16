import React, { useCallback,useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import useDarkso from '../../hook/useDarkso'

import { Navigation } from '../Navigation'
import { NavigationTab } from '../Navigation/Navigation.types'
//import { t } from 'decentraland-dapps/dist/modules/translation/utils'
import { Props } from './TrainingPage.type'
import { injected } from '../../modules/wallet/connectors'
import { NFT } from '../../modules/nft/types'
import {
    Loader
} from 'decentraland-ui'
import { AssetCard } from '../AssetCard'
import { locations } from '../../modules/routing/locations'

import './TrainingPage.css'
import Darkso from '../../darkso'

const TrainingPage = (props: Props) => {
    const {
        training_state, nfts, onEnableTrain, onSetFirst, onSetSecond, onTrainingRequest, onNavigate, onReset, onTrainingSuccess
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

    const darkso = useDarkso()

    const context = useWeb3React<Web3Provider>()
    const { connector, account, active } = context
    //let isStart = false;

    if (darkso) {
        const darksoNFTContract = darkso?.contracts.getDarksoNFTContract()
        darksoNFTContract.on("NewDARKToken", (tokenId, name, type, tarity, training, strength, defense, startTime) => {
            if(loading){
                console.log("Train NewDARKToken");

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
                onTrainingSuccess(nft)
            }
        })
    }

    const handleTraining = useCallback(
        () => {
            const connected = injected === connector;
            if (connected && active && account) {

                if (first_trainer_id && second_trainer_id) {
                    onTrainingRequest(darkso as Darkso, first_trainer_id, second_trainer_id)
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
                onNavigate(locations.myasset())
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
            <Navigation activeTab={NavigationTab.TRAIN} />
            <div className="page-title flex-middle el-main--headerTitle flex-center">
                Select masters to train a disciple
            </div>
            <main className="main">
                <div className="flex-center">
                    <div className="h-main-wrapper">
                        <div className="flex detail-content">
                            <div className="detail-right">

                                <div className="img-box cursor_focus" onClick={() => handleSetHero(true)}>

                                    {first_trainer_id ? (
                                        <AssetCard
                                            key={firstNFT?.token_id}
                                            asset={firstNFT as NFT}
                                        />
                                    ) : <h1>Select hero1</h1>}

                                </div>
                            </div>
                            <div className="detail-right">
                                <div className="img-box cursor_focus" onClick={() => handleSetHero(false)}>
                                    {second_trainer_id ? (
                                        <AssetCard
                                            key={secondNFT?.token_id}
                                            asset={secondNFT as NFT}
                                        />
                                    ) : <h1>Select hero2</h1>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-center disciple" >
                        {loading ? (
                            <Loader></Loader>
                        ) : null}
                        <button className="btn" onClick={() => handleTraining()}>Train</button>
                    </div>
                    <div className="flex flex-center disciple">

                        <div className="img-box">
                            {/* <AssetCard
                                key={0}
                                asset={undefined}
                            /> */}
                        </div>
                    </div>

                </div>
            </main>

        </>
    )

}

export default React.memo(TrainingPage)
