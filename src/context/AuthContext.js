import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { resetAndNavigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return {
        token: action.payload,
        errorMessage: ""
      };
    case "signout":
      return {
        token: null,
        errorMessage: ""
      };
    case "add_error":
      return {
        ...state,
        errorMessage: action.payload
      };
    case "clear_error_message":
      return {
        ...state,
        errorMessage: ""
      };
    default:
      return state;
  }
};

const tryLocalSignIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");

  if (token) {
    dispatch({ type: "signin", payload: token });
    resetAndNavigate("MainFlow");
  } else
    resetAndNavigate("Signup");
}

const signup = dispatch => async ({ email, password }) => {
  dispatch({ type: "clear_error_message" });
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    resetAndNavigate("MainFlow", {
      screen: "TrackListFlow",
      params: {
        screen: "TrackList"
      }
    });
  } catch (err) {
    dispatch({ type: "add_error", payload: err.response.data.error });
  }
};

const signin = dispatch => async ({ email, password }) => {
  dispatch({ type: "clear_error_message" });
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signin", payload: response.data.token });

    resetAndNavigate("MainFlow", {
      screen: "TrackListFlow",
      params: {
        screen: "TrackList"
      }
    });
  } catch (err) {
    dispatch({ type: "add_error", payload: err.response.data.error });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });

  resetAndNavigate("Signup");
};

const clearErrorMessage = dispatch => async () => {
  dispatch({ type: "clear_error_message" });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { tryLocalSignIn, signup, signin, signout, clearErrorMessage },
  { token: null, errorMessage: "" }
);