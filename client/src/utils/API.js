import axios from "axios";

export default {
    newVolunteer: function(volunteerData) {
        return axios.post("/api/register", volunteerData)
    },

    newCharity: function(charityData) {
        return axios.post("/api/charitysignup", charityData)
    }
}