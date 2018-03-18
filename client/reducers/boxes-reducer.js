const initialState = {
  status: null,
  boxes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "DATA_LOADING":
      return Object.assign({}, state, { status: "loading" });
    case "DATA_DONE":
      return Object.assign({}, state, {
        status: "done",
        boxes: action.payload
      });
    case "DATA_NOT_FOUND":
      return Object.assign({}, state, {
        status: "done",
        boxes: []
      });
  }
  return state;
}
