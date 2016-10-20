$(document).ready(function() {
//      INITIAL CODE - DON'T EDIT THIS    //
var myTag = $('#myTag');
var myOverlay = $('#myOverlay');
var tagStartTime = 500;
var tagDuration = 5000;
var tagAnimateOutTime = 1000;

function showTag() {
  myTag.addClass('show');
  myTag.show();
  showTagContent();
}

function animateOutTag() {
  // myTag.addClass('animate-out');
  // animateOutTagContent();
}

function hideTag() {
  // myTag.removeClass('show');
  // myTag.removeClass('animate-out');
  // myTag.hide();
  // hideTagContent();
}

function showOverlay() {
  myOverlay.addClass('show');
  myOverlay.show();
  showOverlayContent();
}

function closeOverlay() {
  myOverlay.addClass('animate-out');
  animateOutOverlayContent();
  setTimeout(function() {
    myTag.removeClass('show');
    myTag.removeClass('animate-out');
    myOverlay.hide();
    hideOverlayContent();
  }, 1000);
}

myTag.click(showOverlay);
setTimeout(showTag, tagStartTime);
setTimeout(hideTag, tagStartTime + tagDuration + tagAnimateOutTime);
// setTimeout(animateOutTag, tagStartTime + tagDuration - tagAnimateOutTime);
setTimeout(animateOutTag, tagStartTime + tagDuration);

//     END OF INITIAL CODE      //

/*

DESCRIPTION:

This is a challenge exercise to test your HTML, CSS, Javascript and creative skills. Please read the rules and challenges goals. If you have any question, don't hesitate to email us.
Fork this jsfiddle or create a github project and email us the url in the end of the exercise.
Good luck :)

RULES:
 - You can only use Jquery and Raphael
 - You can't change the initial Javascript code
 - You can't change the default HTML. All your html must be created and manipulated with Javascript
 - You can't change the default CSS. You can only add/edit CSS to your new elements
 - We recomend using something like http://readysetraphael.com/ to convert the svg to raphael
 - You can get the svg from this url: http://edge-assets.wirewax.com/creativeData/locationMarker.svg
 - Write your code in the end where you can use the 3 function already there

CHALLENGE GOALS:
 - create and style all the tag content provided in the pdf
 - the tag content should be horizontaly and verticaly centered inside the myTag element
 - the tag content should animate in from size 0 and expand to the default size and animate out in the reverse way
 - hover effect described in the pdf
 - create an overlay with dummy information about London. You can take ideas from current Wirewax overlays
 - overlay should have a simple image slider


EXTRA CHALLENGES:
 - inner circle should animate considering the time till the tag animates out
 - tag content should be responsive
 - tag pulsing effect described in the pdf
 - add/edit/remove animations and styles at your taste. If so, leave a comment explainning why.

*/

//    Write/edit your code here     //

function showTagContent() {
  console.log("showTagContent");
  var show = $(".show");
  var canvas = new Raphael(document.getElementById('myTag'), 100, 100);
  var svg = mySVG[4];
  var centerX = 50;
  var centerY = 43;
  var radius = 11;
  var normalColor = svg.fill;
  var torquoiseColor = "#46E4C1";
  var markerOne = canvas.path(svg.path).attr({
        "fill" : svg.fill,
        "stroke" : svg.stroke
      }).transform('s0.5');
  var markerTwo = canvas.path(svg.path).attr({
        "fill" : svg.fill,
        "stroke" : svg.stroke,
        "opacity": 0.6
      }).transform("s0.65");
  var markerThree = canvas.path(svg.path).attr({
        "fill" : svg.fill,
        "stroke" : svg.stroke,
        "opacity": 0.18
      }).transform("s0.80");

  canvas.circle(centerX, centerY, radius)
    .attr({
      "stroke-width" : 4,
      "stroke" : svg.fill
    });

  canvas.customAttributes.arc = function (Cx, Cy, value, total, R) {
    var alpha = 360 / total * value,
        a = (90 - alpha) * Math.PI / 180,
        x = Cx + R * Math.cos(a),
        y = Cy - R * Math.sin(a),
        path;
    if (total == value) {
        path = [
            ["M", Cx, Cy - R],
            ["A", R, R, 0, 1, 1, Cx - 0.01, Cy - R]
        ];
    } else {
        path = [
            ["M", Cx, Cy - R],
            ["A", R, R, 0, +(alpha > 180), 1, x, y]
        ];
    }
    return {
        path: path
    };
  };

  var circlePath = canvas.path().attr({
    "stroke": torquoiseColor,
    "stroke-width": 4,
    arc: [centerX, centerY, 0, 100, radius]
  })

  circlePath.animate({
      arc: [centerX, centerY, 100, 100, radius]
  },tagDuration);


  show.append("<div class='all-text'> click to learn about <br/><span class='upper-case-text'>THE LONDON EYE</span></div>")
      .append(markerOne).hide().fadeIn(500);

  show.mouseenter(function(){
    markerOne.attr({"fill" : torquoiseColor});
    markerTwo.attr({"fill" : torquoiseColor});
    markerThree.attr({"fill" : torquoiseColor});
  });

  show.mouseleave(function(event) {
    markerOne.attr({"fill" : normalColor});
    markerTwo.attr({"fill" : normalColor});
    markerThree.attr({"fill" : normalColor});
  });
}

function animateOutTagContent() {
  console.log("animateOutTagContent");
  var show = $(".show");
  show.fadeOut(1000);
}

//pauses the content from the tag temporarily
function hideTagContent() {
  console.log("hideTagContent");
  $('#myTag').hide();
}

function showOverlayContent() {
  console.log("showOverlayContent");
  hideTagContent();
  var $show = $('.show');
  // var $slideContainer = $show.find('.slide');
  var $slides = $show.find('.slides');
  var slideDigit = 1;
  var interval;
  var sliderFrequency=2000;
  var slideSpeed=1000;
  var width=720;
  var londonFactsList = []
  var data = [
    {"fact" : "But one sunshine,my babe"},
    {"fact" : "Cold as the rain is hard"},
    {"fact" : "Filled with eclectics"},
    {"fact" : "And oh goodie goodie food"},
    {"fact" : "Prah Prah prah"},
    {"fact" : "But one sunshine, my babe"}
  ];

  var $slideContainer = $('<ul class="slides">').appendTo($('#myOverlay'));

  $(data).each(function(index , element){

    londonFactsList.push($('<li class="slide slide' + (index+1) + '">').text(element.fact));

    $slideContainer.append($('<li class="slide slide' + ((index % (data.length-1)) +1) + '">').text(element.fact));
  });

  // $(".show").append.apply($(".show"),londonFactsList);

  // $(".show").append($('<ul class="slides">')).apply($(".show"),londonFactsList);






    function startSlider(){
        interval=
    setInterval(function(){
        $slideContainer.animate({'margin-left':'-='+width}, slideSpeed,
            function(){
                        console.log("slideDigit ",slideDigit);

                        // if (++slideDigit === $slides.length){
                        if (++slideDigit === 6){
                        slideDigit=1;$slideContainer.css('margin-left',0);
                    }
            });
            },sliderFrequency);
    }

   function stopSlider(){
     clearInterval(interval);
   }

    $slideContainer.mouseenter(stopSlider);
    $slideContainer.mouseleave(startSlider);

    startSlider();

}

function animateOutOverlayContent() {
  console.log("animateOutOverlayContent");
  var $ul = $('#myOverlay').find('ul');

  $ul.slideUp(1, function(){
    $ul.slideDown('slow');
  });
  // hideOverlayContent();
}

function hideOverlayContent() {
  console.log("hideOverlayContent");
  var $ul = $('#myOverlay').find('ul');
  $ul.hide();
}

var $cancel = $('<button>').text('Cancel').appendTo($('body'));
$cancel.click(function(){

  console.log('cancel clicked')
  animateOutOverlayContent();

});

});
