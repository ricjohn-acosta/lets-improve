import { AUTH_USER } from '../actions/actions'
import { SIGNOUT } from '../actions/actions'

import fire from '../fire'

const initialState = {
  user: {}
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      fire.auth().onAuthStateChanged(user => {
        if (user) {
          return {
            user: {user}
          }
        } else {
          return {
            user: {user: null}
          }
        }
      })

    case SIGNOUT:
      fire.auth().signOut()
      return {
        user:{user:null}
      }
    default: return state
  }
}