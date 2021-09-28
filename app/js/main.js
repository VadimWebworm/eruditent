$(function () {
    $('.chat__message-item').on('click', function () {
        $('.chat__message-item').removeClass('chat__message-item--on');
        $(this).addClass('chat__message-item--on');
        $('.chat__message-area').removeClass('chat__message-area-on');
        $(this).addClass('chat__message-area-on');
    });
    if ($(".chat__message-item").hasClass("chat__message-item--on")) {
        $('.chat__message_null').css('display', 'none');
    }
// Перевод SVG в Inline
    $('img.icon-video').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });


});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show"); 
    document.querySelector(".dropdown").classList.toggle("active__dropdown");
    
}



// let numberMute = document.querySelectorAll('.chat__message-number');
// let userMute = document.querySelector('.chat__message-item--mute');
// if (userMute.classList.contains(numberMute)) {

// numberMute.classList.add("chat__message-number--mute");

// else {
//     numberMute.classList.remove("chat__message-number--mute");
// }
// document.querySelectorAll('.someclass').forEach(function(element) {
//     element.className += " red";
//   });


// Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//     // if (!event.target.matches('.dropbtn')) {

//     //     // var dropdowns = document.getElementsByClassName("dropdown-content");
//     //     // var i;
//     //     // for (i = 0; i < dropdowns.length; i++) {
//     //     //     var openDropdown = dropdowns[i];
//     //     //     // if (openDropdown.classList.contains('show')) {
//     //     //     //     openDropdown.classList.remove('show');
//     //     //     // }
//     //     // }
//     // }
// }
