const express = require('express');
const app = [];
function occupyPorts(range1, range2){
for(var i = range1; i <= range2; i++){
app[i] = express();
app[i].all("/*", (req, res) => {
res.send("Port occupied successfully!");
});
app[i].listen(i, function(err){
	if (err) console.log("Error in server setup")
	console.log("Server listening on a port");
});
}
}
// occupyPorts(1, 8080) occupies ports 1 - 8080. occupyPorts(1000, 2000) occupies ports from 1000 - 2000.
