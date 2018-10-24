//charity.js copy

const router = require("express").Router();
const axios = require("axios")


//to be added to .env
//app_id
//app_key
// comment to submit



axios({
  method:'get',
  url:'https://api.data.charitynavigator.org/v2/Organizations?app_id=55723541&app_key=9a29e15660eeb4f5080e74807273e894&pageSize=20&rated=true&state=CA&sort=NAME',
  responseType:'object'
})
  .then(function (response) {
    for (let i = 0; i < response.data.length; i++) {
      const category = response.data[i].category.categoryName;
      const name = response.data[i].charityName;
      const status = response.data[i].irsClassification.subsection; 
      console.log("Charity: " + name + "\n" + "Category: " + category + "\n" + "Status: " + status + "\n" + "========================================================");
    }
  });

module.exports = axios;