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
  myTag.addClass('animate-out');
  animateOutTagContent();
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
setTimeout(hideTag, tagStartTime + tagDuration);
setTimeout(animateOutTag, tagStartTime + tagDuration - tagAnimateOutTime);
//     END OF INITIAL CODE      //

/*

DESCRIPTION:

This is a challenge exercise for WIREWAX where we test your HTML, CSS, Javascript and creative skills. Please read the rules and challenges goals. If you have any question, don't hesitate to email us.
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
  show.append("<div class='all-text'> click to learn about the <br/><span class='upper-case-text'>THE LONDON EYE</span></div>");

              // ("<p class='lower-case-text'>click to learn about the</p>" +
              //             "<p><span class='upper-case-text'>THE LONDON EYE</span></p>");
}

function animateOutTagContent() {
  console.log("animateOutTagContent");
}

function hideTagContent() {
  console.log("hideTagContent");
}

function showOverlayContent() {
  console.log("showOverlayContent");
}

function animateOutOverlayContent() {
  console.log("animateOutOverlayContent");
}

function hideOverlayContent() {
  console.log("hideOverlayContent");
}

// This is just here for you to see the tag more easily. You should delete this after starting working.
myTag.css('background', 'green');
myOverlay.css('background', 'white');

});
