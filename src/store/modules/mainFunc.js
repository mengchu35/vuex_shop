let state = {
  price: 100,
  quantity: 20, // 總量
  count: 20, // 剩餘個數
  increment: 0, // 租借次數
  rules: [
    '$100 each time.',
    'Please return no later than 18:00.',
    'Be safe.'
  ],
}
let mutations = {
  plus(state) {
    state.count++;
  },
  minus(state) {
    state.count--;
    state.increment++;
  },
  reset(state) {
    state.count = 20;
    state.increment = 0;
  }
}
let getters = {
  btnPlus(state) {
    return ((state.count >= state.quantity) ? true : false);
  },
  btnMinus(state) {
    return ((state.count <= 0) ? true : false);
  },
  TotalIncome(state) {
    return state.price * state.increment;
  }
}
let actions = {
  resetAsync(context) {
    setTimeout(() => {
      context.commit('reset');
    }, 3000);
  }
}

export default {
  state,
  mutations,
  getters,
  actions,
}