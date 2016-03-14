var data = [
	{
		"label" : "No Complications",
		"cost" : "4389"
	},
	{
		"label" : "Premature / Low Birth Weight",
		"cost" : "54149"
	},
	{
		"label" : "All Births",
		"cost" : "11413"
	}
];

var chart = c3.generate({
	bindto : ".graph",
	data : {
		columns :[
		['Cost', 4389, 54149, 11413],
		['Birth Type', 'No Complications', 'Premature / Low Birth Weight', 'All Births']
		]
	}
});