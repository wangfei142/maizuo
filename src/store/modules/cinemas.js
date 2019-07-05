import axios from "axios";
import { Toast } from "vant";

const state = {
  cinemasList: [],
  ticketFlag: 1,
  district_List: [],
}

const getters = {
  districtCinemasList(state) {
    let result = [{dName:"全城",list:state.cinemasList}];
    state.cinemasList.forEach(district => {
      let dName = district.districtName;
      let index = result.findIndex(item => item.dName === dName);
      if (index > -1) {
        result[index].list.push(district);
      } else {
        let obj = {
          dName,
          list: [district]
        };
        result.push(obj);
      }
    });
    return result;
  },
    // return result;
  districtList(state) {
    let result = [];
    state.cinemasList.forEach(district => {
      let dName = district.districtName;
      let index = result.findIndex(item => item.dName === dName);
      if (index > -1) {
        result[index].list.push(district);
      } else {
        let obj = {
          dName,
          list: [district]
        };
        result.push(obj);
      }
    });
    // return result;
    let newDistrict = [];
    let num = 1;
    result.forEach(diqu => {
      let obj1 = {
        value: num++,
        text: diqu.dName
      };
      newDistrict.push(obj1)
    })
    return newDistrict;
  }
}

const mutations = {
  setCinemasList(state, payload) {
    state.cinemasList = payload.list;
  },
  setdistrictList(state, payload) {
    state.district_List = payload.list;
  },
  setTicketFlag(state, payload) {
    state.ticketFlag = payload.num;
  }
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
        if (response.data.status === 0) {
          commit({ type: "setCinemasList", list: response.data.data.cinemas });
         
          commit({ type: "setTicketFlag", num: 1 });
          console.log( state.cinemasList);
          
         if( state.cinemasList.length == 0){
          commit({ type: "setdistrictList", list:[] });
         }else {
          commit({ type: "setdistrictList", list: response.data.data.cinemas });
         }
         
        } else {
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
