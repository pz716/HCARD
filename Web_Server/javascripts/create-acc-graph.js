/*
 * Parse the data and create a graph with the data.
 */
function parseData(accGraph) {
	Papa.parse("../data/live.csv", {
		download: true,
		complete: function(results) {
			accGraph(results.data);
		}
	});
}

function accGraph(data) {
	var time = [];
	var x_a = ["Acceleration X"];
	var y_a = ["Acceleration Y"];
	var z_a = ["Acceleration Z"];
	var x_g = ["Angular Rate X"];
	var y_g = ["Angular Rate Y"];
	var z_g = ["Angular Rate Z"];

	for (var i = 1; i < data.length-1; i++) {
		time.push(data[i][0]);
		x_a.push(data[i][1]);
		y_a.push(data[i][2]);
		z_a.push(data[i][3]);
		x_g.push(data[i][4]);
		y_g.push(data[i][5]);
		z_g.push(data[i][6]);
	}

	console.log(time);
	console.log(x_a);

	var acc_chart = c3.generate({
		bindto: '#acc_chart',
	    data: {
	        columns: [
	        	x_a,y_a,z_a
	        ]
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: time,
	            tick: {
                    count: 5,
                    multiline: false,
                	/*culling: {
                    	max: 4
                	}*/
            	}
	        }
	    },
	    zoom: {
        	enabled: true
    	},
	    legend: {
	        position: 'right'
	    }
	});
	

}

parseData(accGraph);

// refresh interval function
/*
window.setInterval(function() {
    parseData(accGraph);
}, 1000);
*/