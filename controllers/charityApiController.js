const axios = require("axios");

module.exports = {
	getCharities: function(req,res) {
	axios({
  		method:'get',
  		//url:'https://api.data.charitynavigator.org/v2/Organizations?app_id=55723541&app_key=9a29e15660eeb4f5080e74807273e894&pageSize='+req.pageSize+'&rated=true&state=' + req.state + '&sort=NAME',
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
    res.send("Scrape Complete");
  	});
	}
}