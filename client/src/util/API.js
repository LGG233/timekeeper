import axios from "axios";

export default {
  //get routes
  getAllClients: function () {
    return axios.get("/clients");
  },

  getOneClient: function (id) {
    return axios.get(`/client/${id}`);
  },

  getClientProjects: function (id) {
    return axios.get(`/clientprojects/${id}`);
  },

  getAllProjects: function () {
    return axios.get("/projects");
  },

  getOneProject: function (id) {
    return axios.get(`/project/${id}`);
  },

  getAllTime: function () {
    return axios.get("/time");
  },

  getTimeEntry: function (id) {
    return axios.get(`/time/${id}`);
  },

  getTimeRange: function (dataRange) {
    return axios.get(`/time/range`);
  },

  getClientTime: function (id) {
    return axios.get(`/clienttime/${id}`);
  },

  getProjectTime: function (id) {
    return axios.get(`/projectTime/${id}`);
  },

  // post routes
  addNewClient: function (data) {
    console.log(data.entryClientContact);
    return axios.post("/newClient", data);
  },

  addNewProject: function (data) {
    return axios.post("/newProject", data);
  },

  addTimeEntry: function (data) {
    return axios.post("/newtimeentry", data);
  },

  // delete routes
  deleteTimeEntry: function (id) {
    console.log(id);
    return axios.delete(`/time/${id}`);
  },

  deleteClient: function (id) {
    return axios.delete(`/clients/${id}`);
  },

  deleteProject: function (id) {
    return axios.delete(`/project/${id}`);
  },

  // put routes
  editClient: function (id, data) {
    return axios.put(`/client/${id}`, data);
  },

  editProject: function (id, data) {
    return axios.put(`/project/${id}`, data);
  },

  editEntry: function (id, data) {
    return axios.put(`/time/${id}`, data);
  },
};
