/*autoplay modal*/
document.getElementById("button-autoplay").onclick = function() {enableAutoplay()};
var vid= document.getElementById("video-modal");
function enableAutoplay() {
  vid.autoplay = true;
  vid.load();
}

/*play pause modal*/
var modalvideo = document.getElementById("video-modal");

$('#modal-player .play-pause').click(function () {

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
  $(this).find('.play').css({
    "visibility": "hidden",
  });
  $(this).find('.pause').css({
    "visibility": "visible",
  });
  modalvideo.play();
} 
else {
    $(this).addClass('active');
    $(this).find('.play').css({
      "visibility": "visible",
  });
  $(this).find('.pause').css({
      "visibility": "hidden",
  });
  modalvideo.pause();
  
}
});

/*forward button modal*/
$('#video-modal').each(function(i, el){
  var videoH = $(el).parent();
  var btnf = document.querySelector('.forward-button');

  $(btnf, videoH).click(function(){
    el.currentTime = el.currentTime + 10;
   });
});


/*hover modal*/
$('.modal-body').hover(function(){
  $('.modal-controls').css({
    'opacity': '100%',
  });
   
  
}, function(){
  $('.modal-controls').css({
    'opacity': '0',
})
});


/*play-pause video 1*/ 
var juistevideo = document.getElementById("video_one");

$('#first-player .play-pause').click(function () {

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    
    $(this).find('.play').css({
      "visibility": "visible",
  });
  $(this).find('.pause').css({
      "visibility": "hidden",
  });
    juistevideo.pause();
} 
else {
    $(this).addClass('active');
    $(this).find('.play').css({
      "visibility": "hidden",
  });
  $(this).find('.pause').css({
      "visibility": "visible",
  });
    juistevideo.play();
}
});


/*forward button 1*/
$('#video_one').each(function(i, el){
  var videoH = $(el).parent();
  var btnf = document.querySelector('.forward-first');

  $(btnf, videoH).click(function(){
    el.currentTime = el.currentTime + 10;
   });
});


/*play-pause video 2*/ 
var juistevideo2 = document.getElementById("video_two");

$('#second-player .play-pause').click(function () {

  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      
      $(this).find('.play').css({
        "visibility": "visible",
    });
    $(this).find('.pause').css({
        "visibility": "hidden",
    });
      juistevideo2.pause();
  } 
  else {
      $(this).addClass('active');
      $(this).find('.play').css({
        "visibility": "hidden",
    });
    $(this).find('.pause').css({
        "visibility": "visible",
    });
      juistevideo2.play();
  }
});



/*forward button 2 */
$('#video_two').each(function(i, el){
var videoH = $(el).parent();
var btnf = document.querySelector('.forward-second');

$(btnf, videoH).click(function(){
  el.currentTime = el.currentTime + 10;
 });
});


/*play-pause video 3*/ 
var juistevideo3 = document.getElementById("video_three");

$('#third-player .play-pause').click(function () {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    
    $(this).find('.play').css({
      "visibility": "visible",
  });
  $(this).find('.pause').css({
      "visibility": "hidden",
  });
    juistevideo3.pause();
} 
else {
    $(this).addClass('active');
    $(this).find('.play').css({
      "visibility": "hidden",
  });
  $(this).find('.pause').css({
      "visibility": "visible",
  });
    juistevideo3.play();
}
});

/*forward button 3 */
$('#video_three').each(function(i, el){
  var videoH = $(el).parent();
  var btnf = document.querySelector('.forward-third');

  $(btnf, videoH).click(function(){
    el.currentTime = el.currentTime + 10;
   });
});

/*hover videos*/
$('.video-player').hover(function(){
  $('.controls').css({
    'opacity': '100%',
  });
 

}, function(){
  $('.controls').css({
    'opacity': '0',
})
});

/*change z-index videos
function myFunction_one() {
  document.getElementById("first-player").style.zIndex = "3";
  document.getElementById("second-player").style.zIndex = "2";
  document.getElementById("third-player").style.zIndex = "1";
}
function myFunction_two() {
  document.getElementById("second-player").style.zIndex = "3";
  document.getElementById("first-player").style.zIndex = "1";
  document.getElementById("third-player").style.zIndex = "1";
}
function myFunction_three() {
  document.getElementById("third-player").style.zIndex = "3";
  document.getElementById("second-player").style.zIndex = "2";
  document.getElementById("first-player").style.zIndex = "1";
}
*/

document.getElementById("first-player").onclick = function() {myFunction()};
function myFunction() {
  document.getElementById("first-player").style.zIndex = "3";
  document.getElementById("second-player").style.zIndex = "2";
  document.getElementById("third-player").style.zIndex = "1";
}

document.getElementById("second-player").onclick = function() {myFunction_two()};
function myFunction_two() {
  document.getElementById("first-player").style.zIndex = "1";
  document.getElementById("second-player").style.zIndex = "3";
  document.getElementById("third-player").style.zIndex = "1";
}

document.getElementById("third-player").onclick = function() {myFunction_three()};
function myFunction_three() {
  document.getElementById("third-player").style.zIndex = "3";
  document.getElementById("second-player").style.zIndex = "2";
  document.getElementById("first-player").style.zIndex = "1";
}

//accordion// 
$(function() {
  $('.accordion-plans .plans li').on('click', function() {

      var $panel = $(this).closest('.accordion-plans');

      $panel.find('.plans li.active').removeClass('active');
      $(this).addClass('active');

      var panelToShow = $(this).attr('rel');

      $panel.find('.plan.active').slideUp(300, showNextPanel);
      
      function showNextPanel() {
          $(this).removeClass('active');

          $('#'+panelToShow).slideDown(300, function() {
              $(this).addClass('active');
          });
      }
  });
});
