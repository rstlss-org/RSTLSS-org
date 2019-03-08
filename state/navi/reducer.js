import { COLLAPSE_NAVI, EXPAND_NAVI, FIX_NAVI, UNFIX_NAVI } from "./actions";

const initialState = {
  collapsed: false,
  fixed: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case COLLAPSE_NAVI:
      return { ...state, collapsed: true };
    case EXPAND_NAVI:
      return { ...state, collapsed: false };
    case FIX_NAVI:
      return { ...state, fixed: true };
    case UNFIX_NAVI:
      return { ...state, fixed: false };
    default:
      return state;
  }
}

export default reducer;
