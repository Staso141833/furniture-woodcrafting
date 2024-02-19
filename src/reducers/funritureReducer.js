export const furnitureReducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "FURNITURE_FETCH":
      return { ...action.payload };
    case "COMMENT_ADD":
      // console.log(action.payload)
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: {
              email: action.userEmail,
            },
          },
        ],
   
      };

    default:
      return state;
  }
};
