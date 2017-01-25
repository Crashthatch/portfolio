// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [
  {name: '123'},
  {name: 'abc'}
];
export default function projectReducer (state = initialState, action) {
  return state; //This state (the list of projects) never changes. We start with initial state, then never alter it.
}
