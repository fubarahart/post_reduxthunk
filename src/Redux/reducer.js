import { GETPOSTS, REMOVEPOST } from "./Action"

const initialState = {
    posts: []
}

export const PostsReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case GETPOSTS:
    return { ...state, posts:payload }
  //case REMOVEPOST:
    //return { ...state, posts: state.posts.filter(post => post.id !== payload) }
  default:
    return state
  }
}
