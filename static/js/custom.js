// $(document).ready(function(){
//     var fixmeTop = $('.fixme').offset().top;       // get initial position of the element

//     $(window).scroll(function() {                  // assign scroll event listener

//         var currentScroll = $(window).scrollTop(); // get current position

//         if (currentScroll >= fixmeTop) {           // apply position: fixed if you
//             $('.fixme').css({                      // scroll to that element or below it
//                 position: 'fixed',
//                 top: '0',
//                 left: '0',
//                 width: '100%'
//             });
//         } else {                                   // apply position: static
//             $('.fixme').css({                      // if you scroll above it
//                 position: 'static'
//             });
//         }

//     });
// });


$(".toggle-password").click(function() {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });