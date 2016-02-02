'use strict';

/**
 * @ngdoc function
 * @name challengeOpenDataApp.controller:CorrelationCtrl
 * @description
 * # CorrelationCtrl
 * Controller of the challengeOpenDataApp
 */

var stubs = 
 [
	{
	    firstCriterion : 120,
	    secondCriterion: 10,
	    thirdCriterion: 4,
	    regionId: 1
	},
	{
	    firstCriterion : 20,
	    secondCriterion: 12,
	    thirdCriterion: 5,
	    regionId: 2
	},
	{
	    firstCriterion : 70,
	    secondCriterion: 29,
	    thirdCriterion: 5,
	    regionId: 3
	}	
 ];

angular.module('challengeOpenDataApp')
  .controller('CorrelationCtrl', function ($timeout) {

      // var DIAMETER = 600;
      // var PAD = 3;
      // //var DURATION = 500;
      // var svg = d3.select("#bubble-chart")
      // 	      .append('svg')
      // 	      .attr('width', DIAMETER)
      // 	      .attr('height', DIAMETER);

      // svg.selectAll("circle").data(stubs, function(d) { return d.regionId;})
      // 	  .enter().append("circle")
      // 	  .attr("cx", function(d) { return x(+d.firstCriterion);})
      // 	  .attr("cy", function(d) { return y(+d.secondCriterion);})
      // 	  .attr("r", function(d) { return r(Math.sqrt(+d.thirdCriterion));})
      // 	  .style("fill", function(d) { return c(d.regionId);});

      var sampleData = [{
	  "x": 1,
	  "y": 5,
	  "r": 10,
	  "i": 1
      }, {
	  "x": 20,
	  "y": 20,
	  "r": 8,
	  "i": 2
      }, {
	  "x": 40,
	  "y": 10,
	  "r": 14,
	  "i": 3
      }, {
	  "x": 60,
	  "y": 40,
	  "r": 8,
	  "i": 4
      }, {
	  "x": 80,
	  "y": 5,
	  "r": 3,
	  "i": 5
      }, {
	  "x": 100,
	  "y": 60,
	  "r": 5,
	  "i": 6
      }];

      var sampleData1 = [{
	  "x": 2,
	  "y": 6,
	  "r": 10,
	  "i": 1
      }, {
	  "x": 5,
	  "y": 20,
	  "r": 10,
	  "i": 2
      }, {
	  "x": 40,
	  "y": 10,
	  "r": 16,
	  "i": 3
      }, {
	  "x": 56,
	  "y": 40,
	  "r": 8,
	  "i": 4
      }, {
	  "x": 80,
	  "y": 5,
	  "r": 3,
	  "i": 5
      }, {
	  "x": 100,
	  "y": 60,
	  "r": 5,
	  "i": 6
      }];

      var vis = d3.select("#bubble-chart").append('svg').attr('width', 600)
	      .attr('height', 600);
      var draw = function(dataInput) {
	  var xRange = d3.scale.linear().range([40, 400]).domain([d3.min(dataInput, function (d) {
              return (d.x);
	  }),
								  d3.max(dataInput, function (d) {
								      return d.x;
								  })]);
	  var yRange = d3.scale.linear().range([400, 40]).domain([d3.min(dataInput, function (d) {
              return d.y;
	  }),
								  d3.max(dataInput, function (d) {
								      return d.y;
								  })]);
	  var xAxis = d3.svg.axis().scale(xRange);
	  var yAxis = d3.svg.axis().scale(yRange).orient("left");
	  vis.append("svg:g").call(xAxis).attr("transform", "translate(0,400)");
	  vis.append("svg:g").call(yAxis).attr("transform", "translate(40,0)");
	  var circles = vis.selectAll("circle").data(dataInput, function(d) { return d.i; });

	  var duration = 500;
	  var delay = 0;
	  circles
	      .transition()
	      .duration(duration)
	      .delay(function(d, i) {delay = i * 7; return delay;}) 
	      .attr('transform', function(d) { return 'translate(' + xRange(d.x) + ',' + xRange(d.y) + ')'; })
	      .attr('r', function(d) { return d.r; })
	      .style('opacity', 1); // force to 1, so they don't get stuck below 1 at enter()

	  circles
              .enter()
              .insert("circle")
              .attr("cx", function (d) { return xRange (d.x); })
              .attr("cy", function (d) { return yRange (d.y); })
              .attr("r", function(d) { return d.r;})
              .style("fill", "blue");
      };

      draw(sampleData);
      $timeout(function() {
	        draw(sampleData1);
      }, 3000);

      // vis.selectAll("circle").transition().duration(1000)
      // 	  .attr("cx",function(d) {return xRange(d.x);})
      // 	  .attr("cy",function(d) {return yRange(+d.y);})
      // 	  .attr("r",function(d) {return d.r;});

});




