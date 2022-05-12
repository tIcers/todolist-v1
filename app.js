const express = require('express');
const { sendFile } = require('express/lib/response');
const app = express()
const port = 4000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	var today = new Date();
	var currentDay = today.getDay();
	var day = " "

	switch (currentDay) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Thuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			console.log("Error: current day is qual to :" + currentDay);

	}
	// if (currentDay === 6 || currentDay === 0) {
	// 	day = "Weekend";
	// 	//res.render('list', {kindOfDay:day});
	// } else if (currentDay ===1){
	// 	day = "Monday";
	// }else if (cuure{
	//res.render('list', {kindOfDay:day});
	//res.write("<p>Its not a weekend, i have to work on assignment!</p>");
	//res.write("<h1>No, i have to work! IT's not a weekend</h1>");

	res.render("list", { kindOfDay: day });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})