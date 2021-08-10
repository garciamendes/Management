// redux
import { Reducer } from 'redux'

// third party
import produce, { Draft } from 'immer'

// project
import { state_default } from '../../utils'

// local
import { HostsTypes } from './types'

const ProductReducer: Reducer = (state = state_default, action) => {
  return produce(state, (draft: Draft<any>) => {
    switch(action.type) {
      case HostsTypes.FETCH_HOST_LIST_SUCCESS:
        return {
          results: action.payload.results
        }
      default:
        return draft
    }
  })
}

export default ProductReducer