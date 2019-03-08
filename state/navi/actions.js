export const COLLAPSE_NAVI = "COLLAPSE_NAVI";
export const EXPAND_NAVI = "EXPAND_NAVI";
export const FIX_NAVI = "FIX_NAVI";
export const UNFIX_NAVI = "UNFIX_NAVI";

export function collapseNavi() {
  return { type: COLLAPSE_NAVI };
}
export function expandNavi() {
  return { type: EXPAND_NAVI };
}
export function fixNavi() {
  return { type: FIX_NAVI };
}
export function unfixNavi() {
  return { type: UNFIX_NAVI };
}

const actions = {
  COLLAPSE_NAVI: collapseNavi,
  EXPAND_NAVI: expandNavi,
  FIX_NAVI: fixNavi,
  UNFIX_NAVI: unfixNavi
};

export default actions;
