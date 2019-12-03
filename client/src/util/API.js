import axios from "axios";

export default {
    //get routes for accessing db
    getAllClients: function (data) {
        return axios.get("/clients")
    },

    // post routes for creating new items in db
    addNewClient: function (data) {
        return axios.post("/newClient")
    }
}