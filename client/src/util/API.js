import axios from "axios";

export default {
    //get routes 
    getAllClients: function () {
        return axios.get("/clients")
    },

    getClientProjects: function (id) {
        return axios.get(`/clientprojects/${id}`)
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
        console.log(data.entryClientContact);
        return axios.post("/newClient", data)
    },

    addNewProject: function (data) {
        return axios.post("/newProject", data)
    },

    addTimeEntry: function (data) {
        return axios.post("newtimeentry")
    },

    // delete routes
    deleteTimeEntry: function (id) {
        return axios.delete(`/time/${id}`)
    }

}