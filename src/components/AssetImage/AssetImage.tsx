import React from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
//import { Loader } from 'decentraland-ui'
//import { LazyImage } from 'react-lazy-images'
import { NFT } from '../../modules/nft/types'
import { Props } from './AssetImage.types'
import Sarah from '../../images/nft/Sarah.png'
import Aurora from '../../images/nft/Aurora.png'
import Bert from '../../images/nft/Bert.png'
import Kaylan from '../../images/nft/Kaylan.png'
import Nox from '../../images/nft/Nox.png'
import Valkyria from '../../images/nft/Valkyria.png'
import './AssetImage.css'
import Pack from '../../images/nft/pack.png'

// 1x1 transparent pixel
const PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiYAAAAAkAAxkR2eQAAAAASUVORK5CYII='

export const getAssetImage = (name: string | undefined) => {
  switch (name){
    case "Sarah":
      return Sarah
    case "Aurora":
      return Aurora
    case "Bert":
      return Bert
    case "Kaylan":
      return Kaylan
    case "Nox":
      return Nox
    case "Valkyria":
      return Valkyria 
    default:
      return Pack
  }
}

const AssetImage = (props: Props) => {
  const {
    asset
  } = props

  //const [light, dark] = Rarity.getGradient(wearable!.rarity)
  //const backgroundImage = `radial-gradient(${light}, ${dark})`
  const backgroundImage = `radial-gradient(#FFE617,#FFB626)`
  
  return (
    <div
      className="rarity-background"
      style={{
        backgroundImage
      }}
    >
      <img
        alt={t(`asset.${asset.name}`)}
        className="AssetImage"
        src={getAssetImage((asset as NFT).name)}
      />
    </div>
  )

    // default: {
    //   return (
    //     <LazyImage
    //       src={getAssetImage(asset)}
    //       alt={getAssetName(asset)}
    //       debounceDurationMs={1000}
    //       placeholder={({ ref }) => (
    //         <div ref={ref}>
    //           <Loader size="small" active />
    //         </div>
    //       )}
    //       actual={({ imageProps }) => (
    //         <img className="image" alt={getAssetName(asset)} {...imageProps} />
    //       )}
    //     />
    //   )
    // }
  
}

// the purpose of this wrapper is to make the div always be square, by using a 1x1 transparent pixel
const AssetImageWrapper = (props: Props) => {
  const { asset } = props

  let classes = 'AssetImage'
  // if (className) {
  //   classes += ' ' + className
  // }

  return (
    <div className={classes}>
      <img src={PIXEL} alt="pixel" className="pixel" />
      <div className="image-wrapper">
        <AssetImage asset={asset}/>
      </div>
    </div>
  )
}

AssetImage.defaultProps = {
  isDraggable: false,
  withNavigation: false,
  zoom: 0.5,
  isSmall: false,
  showMonospace: false
}

export default React.memo(AssetImageWrapper)
