export const AUTH_USER = 'AUTH_USER'
export const SIGNOUT = 'SIGNOUT'

export function authUser() {
  return {
    type: 'AUTH_USER'
  }
}

export function signoutUser() {
  return {
    type: 'SIGNOUT'
  }
}