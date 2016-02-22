var main = function() {
  var height = 470
      width = 1300
      coordinates = [
                      [width/2,height/2]
                    ];

  //create canvas (drawing area)
  var canvas = d3.select("body").append("svg")
                  .attr("class","Game_Area")
                  .attr("width", width)
                  .attr("height", height)
                  .append("g");

  //create circle
  var circles = canvas.selectAll("circles")
                    .data(coordinates)
                    .enter()
                      .append("circle")
                      .attr("class","circle")
                      .attr("cx", function(d) {return d[0]})
                      .attr("cy", function(d) {return d[1]})
                      .attr("r", 20);

  //trace mouse pointer
  $(document).mousemove (function(event) {
      $('span').text(event.pageX + "," + event.pageY);
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

  //Add label on mouseover circle
  canvas.selectAll("circle")
          .on("mouseover.tooltip", function() { 
              canvas.select("text").remove();  //removes any previuos text elements           
              var circle_coordinates = [
                                        [Math.round($("circle").offset().left) - 1, Math.round($("circle").offset().top - 127)]//Remeber offset position relative to document
                                       ];                                                                                      //127 is where canvas begin on document
              canvas.append("text")
                    .data(circle_coordinates) //supose to come with circle element????
                    .text(function(d) {return "(" + d[0] + "," + d[1] + ")"}) //create (x,y) label
                    .attr("x",function(d) {return d[0] + 10}) //specify where the label should be from left
                    .attr("y",function(d) {return d[1]})      //specify where the label should be from top
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
                    .remove();  //removes text element over 500ms                              
          });

  //on mousedown on circle move circle with mouse pointe
  canvas.selectAll("circle")
        .on("mousedown", function() { 
            canvas.selectAll("circle")
                  .on("mousemove", function() {
                        var x = (event.pageX - Math.round($("circle").offset().left))
                            y = (event.pageY - Math.round($("circle").offset().top));
                        canvas.select("circle")
                        .transition()
                        .duration(0)
                        //.attr("cx", x)
                        //.attr("cy", y)
                        .attr("transform","translate(" + x + "," + y + ")")
                  })                                  
        });

  //on mousedown on circle move circle with mouse pointer
  /*canvas.selectAll("circle")
          .on("click", function() {
              canvas.select("circle")
                     .transition()
                     .duration(1000)
                     .attr("transform","translate(100,0)")
        });*/

  canvas.selectAll("circle")
          .on("mouseup", function() {
               canvas.select("circle").unbind();
          });

};//end of main function

$(document).ready(main);