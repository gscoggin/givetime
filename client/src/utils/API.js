import axios from "axios";

export default {
    newVolunteer: function(volunteerData) {
        return axios.post("/api/signup", volunteerData)
    },

    newCharity: function(charityData) {
        return axios.post("/api/charitysignup", charityData)
    },
    
    newSignin: function(signInData) {
        return axios.post("/api/signin", signInData)
    },

    getUserData: function() {
        return axios.get("/api/userdata")
    }
    
}