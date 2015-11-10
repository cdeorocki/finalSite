$(document).ready(function() {


	    $(".mulberry, .sassafrass, .wildCar, .cat").hide();
    
    $("#link1, #link2, #link3, #link4").bind("click", function () {

      $(".mulberry, .sassafrass, .wildCar, .cat, .landingBar").hide();        
        
      if ($(this).attr("id") == "link1")
      {
        $(".mulberry").show();
      }
       else if ($(this).attr("id") == "link2")
      { 
        $(".sassafrass").show();
      }
       else if ($(this).attr("id") == "link3")
      { 
        $(".wildCar").show();
      }
      else
      {
        $(".cat").show();
      } 

    });




	// $(function() {
	//     $("#item").hover(function(e) {
	//         var edge = closestEdge(e.pageX, e.pageY, $(this).width(), $(this).height());
	//         log(edge);
	//     }, function(e) {
	//         log("out");
	//     });
	// });

	// function closestEdge(x,y,w,h) {
	//         var topEdgeDist = distMetric(x,y,w/2,0);
	//         var bottomEdgeDist = distMetric(x,y,w/2,h);
	//         var leftEdgeDist = distMetric(x,y,0,h/2);
	//         var rightEdgeDist = distMetric(x,y,w,h/2);
	//         var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
	//         switch (min) {
	//             case leftEdgeDist:
	//                 return "left";
	//             case rightEdgeDist:
	//                 return "right";
	//             case topEdgeDist:
	//                 return "top";
	//             case bottomEdgeDist:
	//                 return "bottom";
	//         }
	// }

	// function log(msg) {
	//     // $("#console").append("<pre>" + msg + "</pre>");
	//     console.log(msg);
	// }
	    
	

	// function distMetric(x,y,x2,y2) {
	//     var xDiff = x - x2;
	//     var yDiff = y - y2;
	//     return (xDiff * xDiff) + (yDiff * yDiff);
	// }

	


	
});