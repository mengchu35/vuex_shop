let state = {
  timestamp: '',
}
let mutations = {
  getNow(state) {
    let today = new Date();
    let date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    state.timestamp = `${date} ${time}`;
  }
}
let actions = {
  getNow(context) {
    context.commit('getNow');
  }
}

export default {
  state,
  mutations,
  actions,
}