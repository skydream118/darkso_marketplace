import { connect } from 'react-redux'
import { RootState } from '../../modules/reducer'
import { push } from 'connected-react-router'

import { MapStateProps,MapDispatchProps, MapDispatch } from './TrainingPage.type'
import { getState } from '../../modules/training/selectors'
import { 
    enableTrain,
    setTrainingFirst,
    setTrainingSecond,
    TrainingRequest,
    TrainingReset,
    TrainingSucess
} from '../../modules/training/actions'
import TrainingPage from './TrainingPage'
import { getOnlyNFTs } from '../../modules/nft/selectors'

const mapState = (state: RootState): MapStateProps => ({
    training_state : getState(state),
    nfts : getOnlyNFTs(state)
})

const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
    onNavigate: path => dispatch(push(path)),
    onEnableTrain: val => dispatch(enableTrain(val)),
    onSetFirst: () => dispatch(setTrainingFirst()),
    onSetSecond : () =>dispatch(setTrainingSecond()),
    onReset:() => dispatch(TrainingReset()),
    onTrainingRequest : (darkso, first, second) => dispatch(TrainingRequest(darkso, first, second)),
    onTrainingSuccess : (nft) => dispatch(TrainingSucess(nft))
})

export default connect(mapState, mapDispatch)(TrainingPage)
