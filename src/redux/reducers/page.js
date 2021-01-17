const initState = {
  page: null // string
}

export const CURRENT_PAGE = 'CURRENT_PAGE'

export const page = (state = initState, action) => {
  switch (action.type) {
    case CURRENT_PAGE: {
      return {page: action.page}
    }
    default: {
      return state
    }
  }
}

export const setCurrentPage = (type, page) => ({type, page})
