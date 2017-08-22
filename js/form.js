  $(function() {


      var current_fs, next_fs, previous_fs;
      var left, opacity, scale;
      var animating;


      $(".next").click(function() {
          if (animating) return false;
          animating = true;

          current_fs = $(this).parent();
          next_fs = $(this).parent().next();

          var common_width = $("#msform fieldset").outerWidth();

          current_fs.css('z-index', '1');
          next_fs.css('z-index', '2');


          $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

          next_fs.show().css('left', (common_width));
          next_fs.css('opacity', 1);
          next_fs.animate({
              left: 0
          }, {
              step: function(now, mx) {

                  next_fs.css({
                      'right': now
                  });
                  current_fs.css({
                      'left': now - common_width
                  });
              },
              duration: 800,
              complete: function() {
                  current_fs.hide();
                  animating = false;
              },


          });
      });

      $(".previous").click(function() {
          if (animating) return false;
          animating = true;

          current_fs = $(this).parent();
          previous_fs = $(this).parent().prev();

          var common_width = $("#msform fieldset").outerWidth();

          previous_fs.css('z-index', '2');
          current_fs.css('z-index', '1');

          $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");


          previous_fs.show().css('left', -(common_width));
          previous_fs.css('opacity', 1);
          previous_fs.animate({
              left: 0
          }, {
              step: function(now, mx) {

                  previous_fs.css({
                      'left': now
                  });
                  current_fs.css({
                      'left': common_width + now
                  });
              },
              duration: 800,
              complete: function() {
                  current_fs.hide();
                  animating = false;
              },


          });
      });

      $(".submit").click(function() {
          $('.field_wrapper').hide("slide", {
              direction: "down"
          }, 800);
          return false;
      })


      $('#menu_img').click(function() {
          $('.menu_bar_items').toggle("slide", {
              direction: "right"
          }, 500);
          $('.overlay').toggle();
      });
      $('.overlay, #close_img').click(function() {
          $('.overlay').fadeOut(400);
          $('.menu_bar_items').hide("slide", {
              direction: "right"
          }, 500);
      });
      $(document).on('keydown', function(e) {
          if (e.keyCode === 27) {
              $('.menu_bar_items').hide("slide", {
                  direction: "right"
              }, 500);
              $('.overlay').fadeOut(400);
          }
      });
  });