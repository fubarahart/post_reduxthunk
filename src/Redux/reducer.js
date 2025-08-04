import { GETPOSTS } from "./Action"

const initialState = {
    posts: []
}

export const PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPOSTS:
    return { ...state, posts:payload }

  default:
    return state
  }
}
