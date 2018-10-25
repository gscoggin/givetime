import axios from "axios";

export default {
    newVolunteer: function(volunteerData) {
        return axios.post("/api/register", volunteerData)
    }
}