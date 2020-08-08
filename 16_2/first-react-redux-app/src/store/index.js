import { createStore } from 'redux';

const INIT_STATE = {
  items: [],
}

const mainReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM': return {
      items: [
        ...state.items, {
          text: action.text,
          createdAt: action.createdAt,
        },
      ],
    };
    default: return state;
  }
};

const store = createStore(mainReducer);

export default store;
