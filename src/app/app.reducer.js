const intialState = {
  test: "app",
};

const app = (state = intialState, action) => {
  const { type } = action;

  switch (type) {
    case "GET_APP_INFO":
      return {
        ...state,
        info: test,
      };

    default:
      return state;
  }
};

export default app;
