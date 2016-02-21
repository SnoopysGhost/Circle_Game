var main = function() {
  var height = 700
      width = 1800
      coordinates = [
                      [width/2,height/2]
                    ];
//create canvas (drawing area)
  var canvas = d3.select("body").append("svg")
                  .attr("class","Game_Area")
                                  .attr("width", width)
                                  .attr("height", height)
                                  .append("g")
                                  .attr("transform", "translate(0,0)")
                                  .append("g");//move the whole chart !!!(but not the canvas?)
//create circle
  var circle = canvas.selectAll("circle")
                    .data(coordinates)
                    .enter()
                      .append("circle")
                      .attr("class","circle")
                      .attr("cx", function(d) {return d[0]})
                      .attr("cy", function(d) {return d[1]})
                      .attr("r", 10);
//trace mouse pointer
  var coor =  $(document).mousemove (function(event) {
                  $('span').text(event.pageX + "," + event.pageY);
                });

  //Add labels with text elements
  /*var labels = canvas.selectAll("text")
                      .data(coordinates)
                      .enter()
                        .append("text")
                        .text(function(d) {return "(" + d[0] + "," + d[1] + ")"}) //create (x,y) label for each data point
                        .attr("x",function(d) {return d[0]+ 10}) //specify where the label should be
                        .attr("y",function(d) {return d[1]}) //specify where the label should be
                        .attr("font-family", "sans-serif")
                        .attr("font-size","11px")
                        .attr("fill", "Green")
                        .attr("class","XYcoordinates");*/

  //Add label on mouseover circle
  canvas.selectAll("circle")
          .on("mouseover.tooltip", function() { 
              canvas.select("text").remove();  //removes any previuos text elements           
              canvas.append("text")
                    .data(coordinates) //supose to come with circle element????
                    .text(function(d) {return "(" + d[0] + "," + d[1] + ")"}) //create (x,y) label for each data point
                    .attr("x",function(d) {return d[0] + 10}) //specify where the label should be
                    .attr("y",function(d) {return d[1]}) //specify where the label should be
                    .attr("font-family", "sans-serif")
                    .attr("font-size","11px")
                    .attr("fill", "Red")
                    .attr("class","XYcoordinates");
                    
          });

  //Remove the label as mouseout circle
  canvas.selectAll("circle")
          .on("mouseout.tooltip", function() { 
              canvas.select("text")
              .transition()
              .duration(500)
              .style("opacity", 0)
              .attr("transform","translate(10,-10)")
              .remove();  //removes text element over 500ms in a disapering manier                              
          });

};//end of main function
$(document).ready(main);