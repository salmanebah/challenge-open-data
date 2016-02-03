'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the challengeOpenDataApp
 */

var stubs1 = 
	[
	    {
		xCriterion : {name: "Chommage", value: 120},
		yCriterion: {name: "Emploi", value: 50},
		sizeCriterion: {name: "Age", value: 50},
		region: {id : 1, name: "Rhône-alpes"}
	    },

	    {
		xCriterion : {name: "Chommage", value: 200},
		yCriterion: {name: "Emploi", value: 70},
		sizeCriterion: {name: "Age", value: 20},
		region: {id : 2, name: "Aquitaine"}
	    },

	    {
		xCriterion : {name: "Chommage", value: 245},
		yCriterion: {name: "Emploi", value: 100},
		sizeCriterion: {name: "Age", value: 67},
		region: {id : 3, name: "Normandie"}
	    },
	    
	];

var stubs2 = 
	[
	    {
		xCriterion : {name: "Age", value: 140},
		yCriterion: {name: "Crime", value: 60},
		sizeCriterion: {name: "Age", value: 20},
		region: {id : 1, name: "Rhône-alpes"}
	    },

	    {
		xCriterion : {name: "Age", value: 300},
		yCriterion: {name: "Crime", value: 24},
		sizeCriterion: {name: "Age", value: 56},
		region: {id : 2, name: "Aquitaine"}
	    },

	    {
		xCriterion : {name: "Age", value: 67},
		yCriterion: {name: "Emploi", value: 120},
		sizeCriterion: {name: "Age", value: 56},
		region: {id : 3, name: "Normandie"}
	    },
	    
	];


angular.module('challengeOpenDataApp')
    .controller('CorrelationCtrl', function ($timeout) {

	var margin = {top : 20, right: 20, bottom: 30, left: 40};
	var width = 1000 - margin.left - margin.right;
	var height = 600 - margin.top - margin.bottom;
	var padding = 30;

	var svg = d3.select("#bubble-chart").append("svg")
		.attr("height", height + margin.left + margin.right)
		.attr("width", width + margin.top + margin.bottom);

	var chart = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	var drawChart = function(data) {
	    
	    var xScale = d3.scale.linear()
		    .domain([0, d3.max(data, function(d) { return d.xCriterion.value; })])
		    .range([padding,  width - padding * 2]);
	    
	    var yScale = d3.scale.linear()
	  	    .domain([0, d3.max(data, function(d) { return d.yCriterion.value; })])
		    .range([height - padding,  padding]);

	    var rScale = d3.scale.linear()
		    .domain([0, d3.max(data, function(d) { return d.sizeCriterion.value; })])
		    .range([4, 15]);
	    
	    var xAxis = d3.svg.axis()
		    .scale(xScale)
		    .orient("bottom");

	    var yAxis = d3.svg.axis()
		    .scale(yScale)
		    .orient("left");

	    chart.selectAll(".x.axis").transition().duration(1500).call(xAxis);
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

	    chart.selectAll(".y.axis").transition().duration(500).call(yAxis);
	    chart.selectAll("text.ylabel").text("");

	    chart.append("g")
		.attr("class", "y axis")
		.attr("transform", "translate(0," + padding + ",0)")
		.call(yAxis)
		.append("text")
		.attr("class", "ylabel")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text(data[0].yCriterion.name);

	    var duration = 1500;
	    var delay = 7;
	    //load the data
	    var circles = chart.selectAll("circle")
		    .data(data, function(d) { return d.region.id; });
	    circles
		.transition()
		.duration(duration)
		.delay(function(d, i) {delay = i * 7; return delay;}) 
		.attr("cx", function(d) { return xScale(d.xCriterion.value); })
		.attr("cy", function(d) { return yScale(d.yCriterion.value); })
		.attr('r', function(d) { return rScale(d.sizeCriterion.value); })
		.style('opacity', 0.5); // force to 1, so they don't get stuck below 1 at enter()

	    circles
		.enter()
		.append("circle")
		.attr("cx", function(d) { return xScale(d.xCriterion.value); })
		.attr("cy", function(d) { return yScale(d.yCriterion.value); })
		.attr("r", 0)
		.transition()
		.attr("r", function(d)  { return rScale(d.sizeCriterion.value);})	  
	    //TODO: update the color according to the region
		.style("fill", "blue");
	};

	drawChart(stubs1);
	$timeout(function() {
	    drawChart(stubs2);
	}, 3000);

    });




