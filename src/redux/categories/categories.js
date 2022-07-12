const CHECK_STATUS = 'CHECK_STATUS';

export default reducer = (state = [], action) => {
  switch(action.type) {
    case CHECK_STATUS: {
      return 'Under construction';
    }
    default: return state;
  }
}

export const checkStatus = () => {
  return { type: CHECK_STATUS }
}