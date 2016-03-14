var data = {
	labels: ["No Complications", "Premature / Low Birth Weight", "All Births"],
	datasets: [
		{
			label: "Dataset 1",
			fillColor: "rgba(0,53,121,0.5)",
            strokeColor: "rgba(0,53,121,0.5)",
            highlightFill: "rgba(0,53,121,0.75)",
            highlightStroke: "rgba(0,53,121,1)",
            data: [4389, 54149, 11413]
		}
	]
};

var ctx = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.responsive = true;

new Chart(ctx).Bar(data, {
	barShowStroke: false,
	scaleShowGridLines: true
});