// redux
import { Reducer } from 'redux'

// third party
import produce, { Draft } from 'immer'

// project
import { state_default } from '../../utils'

// local
import { HostDetailTypes } from './types'

const ProductReducer: Reducer = (state = state_default, action) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case HostDetailTypes.FETCH_LIST_DETAIL_SUCCESS:
        return {
          results: action.payload.vulnerabilities
        }
      default:
        return draft
    }
  })
}

export default ProductReducer