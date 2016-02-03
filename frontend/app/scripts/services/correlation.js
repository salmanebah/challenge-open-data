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
	var yearsData = CorrelationData.data.years;
	console.log(yearsData);
      	var d3Service = {};

	var margin = {top : 20, right: 20, bottom: 30, left: 40};
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

	var buildData = function(ctx) {
	    var xCriterionCtx = ctx.xCriterion;
	    var yCriterionCtx = ctx.yCriterion;
	    var sizeCriterionCtx = ctx.sizeCriterion;
	    var data = [];
	    // all ctx have the same size with the same region in the same order
	    for (var i = 0; i < xCriterionCtx.value.length; i++) {
		var currentData = {
		    xCriterion : { name: xCriterionCtx.name, value: xCriterionCtx.value[i].value},
		    yCriterion : { name: yCriterionCtx.name, value: yCriterionCtx.value[i].value},
		    sizeCriterion : { name: sizeCriterionCtx.name, value: sizeCriterionCtx.value[i].value},
		    region: { id: xCriterionCtx.value[i].id, name: xCriterionCtx.value[i].name}
		};
		data.push(currentData);
	    }

	    return data;
	};

	d3Service.getDataByCriteria = function(year, firstCriteria,
					 secondCriteria,
					 thirdCriteria) {
	    //TODO: validate input.
	    if (parseInt(year) < 1990 || parseInt(year) > 2015) {
		console.log("Year data not available");
		return -1;
	    }
	    var yearInfo = yearsData[year];
	    if ((yearInfo.criteria[firstCriteria] === false) ||
		(yearInfo.criteria[secondCriteria] === false) ||
		(yearInfo.criteria[thirdCriteria] === false)) {
		console.log("Not all criterion is available for the year: " + year);
		console.log(yearInfo);
		return -1;
	    }
	    var firstCriteriaInfo = yearInfo[firstCriteria];
	    var secondCriteriaInfo = yearInfo[secondCriteria];
	    var thirdCriteriaInfo = yearInfo[thirdCriteria];
	    // Build the context
	    var context = { xCriterion : {name: firstCriteria, value: firstCriteriaInfo},
			    yCriterion: {name: secondCriteria, value: secondCriteriaInfo},
			    sizeCriterion: {name: thirdCriteria, value: thirdCriteriaInfo}
			  };
	    return buildData(context);
	};

	var initSvg = function() {
	    svg = d3.select("#bubble-chart").append("svg")
		    .attr("height", height + margin.left + margin.right)
		    .attr("width", width + margin.top + margin.bottom);
	    
	    chart = svg.append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	};

	var updateScale = function(data) {
	    xScale = d3.scale.linear()
		    .domain([0, d3.max(data, function(d) { return d.xCriterion.value; })])
		    .range([padding,  width - padding * 2]);
	    
	    yScale = d3.scale.linear()
	  	    .domain([0, d3.max(data, function(d) { return d.yCriterion.value; })])
		    .range([height - padding,  padding]);
	    
	    rScale = d3.scale.linear()
		    .domain([0, d3.max(data, function(d) { return d.sizeCriterion.value; })])
		    .range([4, 15]);
	};

	var updateXaxis = function(data) {
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
	};

	var updateYaxis = function(data) {
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
	};

	var updateAxis = function(data) {
	    xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");	    
	    yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");
	    updateXaxis(data);
	    updateYaxis(data);
	};


	var drawRegions = function(data) {
	    var duration = 1500;
	    var delay = 7;
	    //load the data
	    circles = chart.selectAll("circle")
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
		.style("fill", "blue")
	        .style("opacity", 0.5);
	};

	// Called once to setup the context
	initSvg();
	d3Service.drawChart = function(data) {
	    updateScale(data);
	    updateAxis(data);
	    drawRegions(data);	  
	};
	
	return d3Service;
  });
