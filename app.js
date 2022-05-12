const express = require('express');
const port = 4000
const bodyParser = require("body-parser");

const app = express()

var items = ["Study ejs","Workout"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
	var today = new Date();

	var options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	var day = today.toLocaleDateString("ja-JP", options);



	// switch (currentDay) {
	// 	case 0:
	// 		day = "Sunday";
	// 		break;
	// 	case 1:
	// 		day = "Monday";
	// 		break;
	// 	case 2:
	// 		day = "Thuesday";
	// 		break;
	// 	case 3:
	// 		day = "Wednesday";
	// 		break;
	// 	case 4:
	// 		day = "Thursday";
	// 		break;
	// 	case 5:
	// 		day = "Friday";
	// 		break;
	// 	case 6:
	// 		day = "Saturday";
	// 		break;
	// 	default:
	// 		console.log("Error: current day is qual to :" + currentDay);


	// if (currentDay === 6 || currentDay === 0) {
	// 	day = "Weekend";
	// 	//res.render('list', {kindOfDay:day});
	// } else if (currentDay ===1){
	// 	day = "Monday";
	// }else if (cuure{
	//res.render('list', {kindOfDay:day});
	//res.write("<p>Its not a weekend, i have to work on assignment!</p>");
	//res.write("<h1>No, i have to work! IT's not a weekend</h1>");

	res.render("list", {kindOfDay: day, NewListItems: items});
});


app.post('/', (req, res) => {
	var item = req.body.newItem;
	//console.log(new_item);
	items.push(item);
	res.redirect("/");
	
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})