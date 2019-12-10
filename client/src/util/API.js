import axios from "axios";

export default {
    //get routes 
    getAllClients: function () {
        return axios.get("/clients")
    },

    getAllProjects: function () {
        return axios.get("/projects")
    },

    getAllTime: function () {
        return axios.get("/time")
    },

    getTimeEntry: function (id) {
        return axios.get(`/time/${id}`)
    },

    // post routes 
    addNewClient: function (data) {
        return axios.post("/newClient")
    },

    addTimeEntry: function (data) {
        return axios.post("newtimeentry")
    },

    // delete routes
    deleteTimeEntry: function (id) {
        return axios.delete(`/time/${id}`)
    }

}