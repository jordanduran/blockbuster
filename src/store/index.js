import { createStore } from 'easy-peasy';

const store = createStore({
  user:
    'user' in sessionStorage
      ? JSON.parse(sessionStorage.getItem('user'))
      : null,
});

export default store;
