import axios from "axios";

export default {
    getEvents: function() {
        return axios.get("/api/eventfeed");
    },
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
    },
    
    newEvent: function(eventData) {
        return axios.post("/api/event", eventData)
    }
    
}