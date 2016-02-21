var main = function() {
  var height = 700

  var width = 1800

  var coordinates = [
                      [width/2,height/2]
                    ]

  var canvas = d3.select("body").append("svg")
                  .attr("class","Game_Area")
                                  .attr("width", width)
                                  .attr("height", height)
                                  .append("g")
                                  .attr("transform", "translate(0,0)")
                                  .append("g");//move the whole chart !!!(but not the canvas?)

  var circles = canvas.selectAll(circles)
                    .data(coordinates)
                    .enter()
                      .append("circle")
                      .attr("class","circle")
                      .attr("cx", function(d) {return d[0]})
                      .attr("cy", function(d) {return d[1]})
                      .attr("r", 10);

  var coor =  $(document).mousemove (function(event) {
                  $('span').text(event.pageX + "," + event.pageY);
                });

  /*//Add labels with text elements
  var labels = canvas.selectAll("text")
                      .data(coordinates)
                      .enter()
                        .append("text")
                        .text(function(d) {return "(" + d[0] + "," + d[1] + ")"}) //create (x,y) label for each data point
                        .attr("x",function(d) {return d[0]}) //specify where the label should be
                        .attr("y",function(d) {return d[1]}) //specify where the label should be
                        .attr("font-family", "sans-serif")
                        .attr("font-size","11px")
                        .attr("fill", "Green");*/

  //Add labels with text elements
  var labels = canvas.selectAll("text")
                      .data(coordinates)
                      .enter()
                        .append("text")
                        .text(function(d) {return "(" + d[0] + "," + d[1] + ")"}) //create (x,y) label for each data point
                        .attr("x",function(d) {return d[0]}) //specify where the label should be
                        .attr("y",function(d) {return d[1]}) //specify where the label should be
                        .attr("font-family", "sans-serif")
                        .attr("font-size","11px")
                        .attr("fill", "Green");
};

$(document).ready(main);