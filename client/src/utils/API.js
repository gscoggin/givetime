import axios from "axios";

export default {
    newVolunteer: function(volunteerData) {
        return axios.post("/api/signup", volunteerData)
    },
    newSignin: function(signInData) {
        return axios.post("/api/signin", signInData)
    }
    
}