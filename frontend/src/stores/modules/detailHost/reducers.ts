// redux
import { Reducer } from 'redux'

// third party
import produce, { Draft } from 'immer'

// project
import { state_default } from '../../utils'

// local
import { HostDetailProps, HostDetailTypes } from './types'

const ProductReducer: Reducer = (state = state_default, action) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case HostDetailTypes.FETCH_LIST_DETAIL_SUCCESS:
        return {
          results: action.payload.vulnerabilities
        }
      case HostDetailTypes.FETCH_STATUS_DETAIL_SUCCESS:
        const vuln = draft.results.findIndex(
          (host: HostDetailProps) => host.vulnerability.id === action.payload.vuln_pk)
        if (vuln !== -1) {
          draft.results[vuln].status = action.payload.body.status
        }
        return draft
      default:
        return draft
    }
  })
}

export default ProductReducer