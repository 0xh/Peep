import { subreddit, posts, general } from 'common/lib/types'

const INITIAL_STATE = {
  active: '',
  posts: [],
  anchors: { brefore: '', after: '' },
  errors: [],
  apiToken: {},
  booting: false
}

const { setActive, clearActive } = subreddit
const { setPosts, clearPosts, setMorePosts, setAnchors } = posts
const { setError, setToken, setBootingState } = general

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case setActive: return { ...state, setActive: payload }
    case clearActive: return { ...state, setActive: '' }
    case setPosts: return { ...state, posts: payload }
    case setMorePosts: return { ...state, posts: [...state.posts, ...payload] }
    case clearPosts: return { ...state, posts: [] }
    case setAnchors: return { ...state, anchors: payload }
    case setBootingState: return { ...state, booting: payload }
    case setToken: return { ...state, apiToken: payload }
    case setError: return { ...state, errors: [...state.errors, payload] }
    default: return state
  }
}
