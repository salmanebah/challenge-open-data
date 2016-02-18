'use strict';

/**
 * @ngdoc service
 * @name challengeOpenDataApp.correlation
 * @description
 * # correlation
 * Service in the challengeOpenDataApp.
 */


angular.module('challengeOpenDataApp')
    .service('CorrelationService', function (CorrelationData) {

	// get the data from the json file
	var yearsData = CorrelationData.data.years;
	var d3Service = {};

	var margin = {top: 60, right: 60, bottom: 60, left: 60};
	var width = 1000 - margin.left - margin.right;
	var height = 600 - margin.top - margin.bottom;
	var padding = 30;
	var svg;
	var chart;
	var xScale;
	var yScale;
	var rScale;
	var xAxis;
	var yAxis;
	var circles;
	var tooltip;

	// Color for the different regions
	var colorArray = ["#1f77b4", "#e7ba52", "#2ca02c", "#8c564b",
			  "#bcbd22", "#8c6d31", "#990099", "#993333",
			  "#99cc00", "#cc3300", "#0099ff", "#ff9900",
			  "#00ff99"];
	// Map old regions id to color representing the new regions
	var colorMap = {
	    11: colorArray[0],
	    24: colorArray[1],
	    26: colorArray[2], 43: colorArray[2],
	    23: colorArray[3], 25: colorArray[3],
	    31: colorArray[4], 22: colorArray[4],
	    41: colorArray[5], 42: colorArray[5], 21: colorArray[5],
	    52: colorArray[6],
	    53: colorArray[7],
	    72: colorArray[8], 54: colorArray[8], 74: colorArray[8],
	    73: colorArray[9], 91: colorArray[9],
	    82: colorArray[10], 83: colorArray[10],
	    93: colorArray[11],
	    94: colorArray[12]
	};

	/**
	 * @param ctx An object containing data for three criteria
	 * @return data suited for d3
	 */
	var buildData = function (ctx) {
	    var xCriterionCtx = ctx.xCriterion;
	    var yCriterionCtx = ctx.yCriterion;
	    var sizeCriterionCtx = ctx.sizeCriterion;
	    var data = [];
	    // all ctx have the same size with the same region in the same order
	    for (var i = 0; i < xCriterionCtx.value.length; i++) {
		var currentData = {
		    xCriterion: {name: xCriterionCtx.name, value: xCriterionCtx.value[i].value},
		    yCriterion: {name: yCriterionCtx.name, value: yCriterionCtx.value[i].value},
		    sizeCriterion: {name: sizeCriterionCtx.name, value: sizeCriterionCtx.value[i].value},
		    region: {id: xCriterionCtx.value[i].id, name: xCriterionCtx.value[i].name}
		};
		data.push(currentData);
	    }

	    return data;
	};

	/**
	 * Get the data by year for given criteria
	 * @param year The year to get data for
	 * @param firstCriteria The first criterion to use
	 * @param secondCriteria The second criterion to use
	 * @param thirdCriteria The third criterion to use
	 * @return the data for the criteria
	 */
	d3Service.getDataByCriteria = function (year, firstCriteria,
						secondCriteria,
						thirdCriteria) {
	    //TODO: validate input.
	    if (year === null || parseInt(year) < 1990 || parseInt(year) > 2015) {
		console.log("Year data not available");
		return -1;
	    }
	    var yearInfo = yearsData[year];
	    console.log(yearInfo);
	    if ((yearInfo.criteria[firstCriteria] === false) ||
		(yearInfo.criteria[secondCriteria] === false) ||
		(yearInfo.criteria[thirdCriteria] === false)) {
		console.log("Not all criterion is available for the year: " + year);
		console.log(yearInfo);
		return -1;
	    }
	    // get the data for the criteria
	    var firstCriteriaInfo = yearInfo[firstCriteria];
	    var secondCriteriaInfo = yearInfo[secondCriteria];
	    var thirdCriteriaInfo = yearInfo[thirdCriteria];
	    // Build the context
	    var context = {
		xCriterion: {name: firstCriteria, value: firstCriteriaInfo},
		yCriterion: {name: secondCriteria, value: secondCriteriaInfo},
		sizeCriterion: {name: thirdCriteria, value: thirdCriteriaInfo}
	    };
	    // return data suited for d3
	    return buildData(context);
	};

	/**
	 * Initialize d3 canvas
	 */
	var initSvg = function () {
	    // The main canvas
	    svg = d3.select("#bubble-chart").append("svg")
		.attr("height", height + margin.left + margin.right)
		.attr("width", width + margin.top + margin.bottom + 900);
	    // the tooltip on the bubbles
	    tooltip = d3.select("body").append("div")
		.attr("class", "tooltip")
		.style("opacity", 0);
	    chart = svg.append("g")
		.attr("transform", "translate(" + 250 + "," + 100 + ")");
	};

	/**
	 * Update the scale for the graph
	 * @param data the new data to update the scale for
	 */
	var updateScale = function (data) {
	    // scale linearly by using the min and max for x and y axis
	    xScale = d3.scale.linear()
		.domain([d3.min(data, function (d) {
		    return d.xCriterion.value;
		}),
			 d3.max(data, function (d) {
			     return d.xCriterion.value;
			 })])
		.range([padding, width - padding * 2]);

	    yScale = d3.scale.linear()
		.domain([d3.min(data, function (d) {
		    return d.yCriterion.value;
		}),
			 d3.max(data, function (d) {
			     return d.yCriterion.value;
			 })])
		.range([height - padding, padding]);

	    // scale linearly from 0 to max for z axis
	    rScale = d3.scale.linear()
		.domain([0, d3.max(data, function (d) {
		    return d.sizeCriterion.value;
		})])
		.range([10, 30]);
	};

	/**
	 * Update dynamically the x axis based on new data
	 * @param data the new data to update x axis for
	 */
	var updateXaxis = function (data) {
	    chart.selectAll(".x.axis").transition().duration(1500).call(xAxis);
	    // reset the label for later update
	    chart.selectAll("text.xlabel").text("");

	    chart.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + (height - padding) + ")")
		.call(xAxis)
		.append("text")
		.attr("class", "xlabel")
		.attr("x", width)
		.attr("y", -6)
		.style("text-anchor", "end")
		.text(data[0].xCriterion.name); // set xCriterion name as label
	};

	/**
	 * Update dynamically the y axis based on new data
	 * @param data the new data to update x axis for
	 */
	var updateYaxis = function (data) {
	    chart.selectAll(".y.axis").transition().duration(500).call(yAxis);
	    // reset the label for later update
	    chart.selectAll("text.ylabel").text("");

	    chart.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(" + padding + ",0)")
		.call(yAxis)
		.append("text")
		.attr("class", "ylabel")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text(data[0].yCriterion.name); // set yCriterion name as label
	};

	/**
	 * Update dynamically the axis based on new data
	 * @param data the new data to update x axis for
	 */
	var updateAxis = function (data) {
	    xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");
	    yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");
	    updateXaxis(data);
	    updateYaxis(data);
	};

	/**
	 * Draw the bubbles for the data
	 */
	var drawRegions = function (data) {
	    var duration = 1500;
	    var delay = 7;
	    var opacity = 1;
	    var delayStep = 7;
	    //load the data, use the region id
	    // as the identifier of the different bubbles
	    circles = chart.selectAll("circle")
		.data(data, function (d) {
		    return d.region.id;
		});
	    // on transition, move the bubbles to their new positions, use sizeCriterion
	    // for the size of the bubbles
	    circles
		.transition()
		.duration(duration)
		.delay(function (d, i) {
		    delay = i * delayStep;
		    return delay;
		})
		.attr("cx", function (d) {
		    return xScale(d.xCriterion.value);
		})
		.attr("cy", function (d) {
		    return yScale(d.yCriterion.value);
		})
		.attr('r', function (d) {
		    return rScale(d.sizeCriterion.value);
		})
		.style('opacity', opacity); // force to 1, so they don't get stuck below 1 at enter()
	    // on enter, move the bubbles to their initial positions
	    // based on xCriterion.value, yCriterion.value, set their size to 0
	    circles
		.enter()
		.append("circle")
		.attr("cx", function (d) {
		    return xScale(d.xCriterion.value);
		})
		.attr("cy", function (d) {
		    return yScale(d.yCriterion.value);
		})
		.attr("r", 0)
		.attr("data-legend", function (d) { // put the name of the region in the legend
		    return d.region.name;
		})
		.attr("data-legend-color", function (d) {
		    var id = d.region.id;
		    return colorMap[id]; // put the color of the region in the legend
		})
		.on("mouseover", function (d) { // on mouseover, move the tooltip to the bubble and
		    tooltip.transition()  // display the criteria and their corresponding value
			.duration(200)
			.style("opacity", 0.9);
		    tooltip.html("Region:" + d.region.name + "<br/>" +
				 d.xCriterion.name + ": " + d.xCriterion.value + "<br/>" +
				 d.yCriterion.name + ": " + d.yCriterion.value + "<br/>" +
				 d.sizeCriterion.name + ": " + d.sizeCriterion.value + "<br/>")
			.style("left", (d3.event.pageX) + "px")
			.style("top", (d3.event.pageY - 28) + "px");
		})
		.on("mouseout", function () { // on mouseout, restore the tooltip 
		    tooltip.transition()
			.duration(500)
			.style("opacity", 0);

		})
		.transition()
		.attr("r", function (d) { // set the bubbles size
		    return rScale(d.sizeCriterion.value);
		})
		.style("fill", function (d) { // fill the bubbles with the corresponding color
		    var id = d.region.id;
		    return colorMap[id];
		})
		.style("opacity", opacity);
	};

	// Called once to setup the context
	initSvg();

	/**
	 * Draw the d3 graph
	 */
	d3Service.drawChart = function (data) {
	    updateScale(data);
	    updateAxis(data);
	    drawRegions(data);
	    // setup the legend
	    svg.append("g")
		.attr("class", "legend")
		.attr("transform", "translate(50,230)")
		.style("font-size", "12px")
		.call(d3.legend);
	};

	return d3Service;
    });
