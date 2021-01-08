import { request } from "@/store/api.js";
import axios from "axios";
export default {
  getAllUsers({ commit }, q) {
    let url;
    if (q && q.page != null && q.page != undefined && q.page > 0) {
      url = `https://reqres.in/api/users?page=${q.page}`;
    } else {
      url = "https://reqres.in/api/users";
    }
    return request(axios, "get", url).then(response => {
      commit("userData", response);
    });
  },
  editUser({ commit }, { id, form }) {
    const url = `https://reqres.in/api/users/${id}`;
    return request(axios, "put", url, form).then(response => {});
  },
  deleteUser({ commit }, id) {
    console.log(id);
    const url = `https://reqres.in/api/users/${id}`;
    return request(axios, "delete", url).then(response => {});
  }
};
