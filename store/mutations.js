export default {
  helloMutation(state, str) {
    state.hello = str;
  },
  isLoading(state, val) {
    state.isLoading = val;
  },
  userData(state, data) {
    state.userDetails = data;
  }
};
