import React from 'react'
import { t } from 'decentraland-dapps/dist/modules/translation/utils'
//import { Loader } from 'decentraland-ui'
//import { LazyImage } from 'react-lazy-images'
//import { getAssetImage } from '../../modules/asset/utils'
import { Props } from './AssetImage.types'
import './AssetImage.css'

// 1x1 transparent pixel
const PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNiYAAAAAkAAxkR2eQAAAAASUVORK5CYII='

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
        className={`image ${asset.name}`}
        //src={getAssetImage(asset.name)}
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
