import { combineReducers } from "redux";

export const channelSubchannel = (
  state = { channel: "", subChannel: "" },
  action
) => {
  console.log(action);
  console.log({ ...state, ...action.payload });
  switch (action.type) {
    case "Update":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default combineReducers({ channelSubchannel });
