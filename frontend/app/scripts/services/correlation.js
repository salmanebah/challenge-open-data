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

    var colorArray = ["#1f77b4", "#e7ba52", "#2ca02c", "#8c564b",
      "#bcbd22", "#8c6d31", "#990099", "#993333",
      "#99cc00", "#cc3300", "#0099ff", "#ff9900",
      "#00ff99"];
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

    d3Service.getDataByCriteria = function (year, firstCriteria,
                                            secondCriteria,
                                            thirdCriteria) {
      //TODO: validate input.
      if (parseInt(year) < 1990 || parseInt(year) > 2015) {
        console.log("Year data not available");
        return -1;
      }
      var yearInfo = yearsData[year];
      console.log(yearInfo);
      if ((yearInfo["criteria"][firstCriteria] === false) ||
        (yearInfo["criteria"][secondCriteria] === false) ||
        (yearInfo["criteria"][thirdCriteria] === false)) {
        console.log("Not all criterion is available for the year: " + year);
        console.log(yearInfo);
        return -1;
      }
      var firstCriteriaInfo = yearInfo[firstCriteria];
      var secondCriteriaInfo = yearInfo[secondCriteria];
      var thirdCriteriaInfo = yearInfo[thirdCriteria];
      // Build the context
      var context = {
        xCriterion: {name: firstCriteria, value: firstCriteriaInfo},
        yCriterion: {name: secondCriteria, value: secondCriteriaInfo},
        sizeCriterion: {name: thirdCriteria, value: thirdCriteriaInfo}
      };
      return buildData(context);
    };

    var initSvg = function () {
      svg = d3.select("#bubble-chart").append("svg")
        .attr("height", height + margin.left + margin.right)
        .attr("width", width + margin.top + margin.bottom);

      tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
      chart = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    };

    var updateScale = function (data) {
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

      rScale = d3.scale.linear()
        .domain([0, d3.max(data, function (d) {
          return d.sizeCriterion.value;
        })])
        .range([10, 30]);
    };

    var updateXaxis = function (data) {
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

    var updateYaxis = function (data) {
      chart.selectAll(".y.axis").transition().duration(500).call(yAxis);
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
        .text(data[0].yCriterion.name);
    };

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


    var drawRegions = function (data) {
      var duration = 1500;
      var delay = 7;
      var opacity = 1;
      var delayStep = 7;
      //load the data
      circles = chart.selectAll("circle")
        .data(data, function (d) {
          return d.region.id;
        });
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
        .on("mouseover", function (d) {
          tooltip.transition()
            .duration(200)
            .style("opacity", 0.9);
          tooltip.html("Région:" + d.region.name + "<br/>" +
              d.xCriterion.name + ": " + d.xCriterion.value + "<br/>" +
              d.yCriterion.name + ": " + d.yCriterion.value + "<br/>" +
              d.sizeCriterion.name + ": " + d.sizeCriterion.value + "<br/>")
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
        })
        .on("mouseout", function () {
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);

        })
        .transition()
        .attr("r", function (d) {
          return rScale(d.sizeCriterion.value);
        })
        .style("fill", function (d) {
          var id = d.region.id;
          return colorMap[id];
        })
        .style("opacity", opacity);
    };
    // Called once to setup the context
    initSvg();
    d3Service.drawChart = function (data) {
      updateScale(data);
      updateAxis(data);
      drawRegions(data);
    };

    return d3Service;
  });
