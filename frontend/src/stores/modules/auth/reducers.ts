// redux
import { Reducer } from 'redux'

// third party
import produce, { Draft } from 'immer'

// local
import { UserTypes } from './types'

const ProductReducer: Reducer = (state = {}, action) => {
  return produce(state, (draft: Draft<any>) => {
    switch(action.type) {
      case UserTypes.FETCH_AUTH_SUCCESS:
        return action.payload
      default:
        return draft
    }
  })
}

export default ProductReducer