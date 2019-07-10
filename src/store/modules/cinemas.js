import axios from "axios";
import { Toast } from "vant";

const state = {
  cinemasList: [],
  ticketFlag: 1,
  district_List: [],
  option1: [],
  SearchCinemasVal : "",
}

const getters = {
  SearchCinemasList(state) {
    let tmp = [];
    if (state.SearchCinemasVal) {
      tmp = state.cinemasList.filter(item => {
        return item.name.indexOf(state.SearchCinemasVal) > -1 || item.address.indexOf(state.SearchCinemasVal) > -1;
      });
    }
    return tmp;
  }
}

const mutations = {
  setCinemasList(state, payload) {
    state.cinemasList = payload.list;
  },
  setdistrictList(state, payload) {
    state.district_List = payload.list;
  },
  setoption1(state, payload) {
    state.option1 = payload.list;
  },
  setticketFlag(state, payload) {
    state.ticketFlag = payload.num;
  },
  setSearchCinemasVal(state, payload) {
    state.SearchCinemasVal = payload.value;
  },
}

const actions = {
  getCinemasList({ commit, state, rootState }) {
    Toast.loading({ duration: 0, mask: true, message: "加载中..." });
    axios
      .get("https://m.maizuo.com/gateway", {
        params: {
          cityId: rootState.city.curCityId,
          ticketFlag: state.ticketFlag,
          k: 6741815
        },
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15605781127614977018611"}',
          "X-Host": "mall.film-ticket.cinema.list"
        }
      })
      .then(response => {
        var sArr = new Set();
        var num = 1;
        let option = [{ text: "全城", value: 0 }]
        if(response.data.status == 0) {
          commit({ type: "setCinemasList", list: response.data.data.cinemas });
          commit({ type: "setticketFlag", num : 1 });
          this.list = response.data.data.cinemas;
          this.lists = this.list;
          this.adresslist = response.data.data;
          for (var i = 0; i < this.list.length; i++) {
            sArr.add(this.list[i].districtName);
          }
          for (var district of sArr) {
            option.push({ text: district, value: num });
            num++;
          }
          commit({ type: "setoption1", list :option });
        }else{
          Toast(res.msg);
        }
        Toast.clear();
      });
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
