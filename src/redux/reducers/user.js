const initState = {
  isAuth: true,
  contacts: [],
  myCases: []
}

export const USER_IS_AUTH = 'USER_IS_AUTH'

export const user = (state = initState, action) => {
  switch (action.type) {
    case USER_IS_AUTH: {
      return {isAuth: action.isAuth}
    }
    default: {
      return state
    }
  }
}

export const setUserIsAuth = (type, isAuth) => ({type, isAuth})
