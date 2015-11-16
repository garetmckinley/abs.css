var abs_screen_breaks, handleScreenSpecificElements;

abs_screen_breaks = {
  mobile: 600,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
  "default": 4000
};

handleScreenSpecificElements = function() {
  var screen, width;
  for (screen in abs_screen_breaks) {
    width = abs_screen_breaks[screen];
    $(screen).each((function(_this) {
      return function(index, element) {
        if ($(window).width() < width) {
          return $(element).show();
        } else {
          return $(element).hide();
        }
      };
    })(this));
  }
  return $(".abs").each((function(_this) {
    return function(index, element) {
      var i, j, k, min_height, results, row, row_height, rows;
      for (screen in abs_screen_breaks) {
        width = abs_screen_breaks[screen];
        if (typeof $(element).data('class-' + screen) !== 'undefined') {
          if ($(window).width() < width) {
            $(element).removeClass();
            $(element).data('class-' + screen);
            $(element).addClass('abs');
            $(element).addClass($(element).data('class-' + screen));
            return;
          } else {
            $(element).removeClass();
          }
        }
      }
      if (typeof $(element).data('min-height') !== 'undefined') {
        rows = 8;
        row_height = $(element).parent().height() / rows;
        row = null;
        min_height = parseInt($(element).data('min-height'));
        for (i = j = 1; j <= 8; i = ++j) {
          $(element).removeClass('row-' + i);
        }
        results = [];
        for (i = k = 1; k <= 8; i = ++k) {
          if (min_height > row_height * i) {
            results.push($(element).removeClass('row-' + i));
          } else {
            $(element).addClass('row-' + i);
            break;
          }
        }
        return results;
      }
    };
  })(this));
};

handleScreenSpecificElements();

$(window).resize((function(_this) {
  return function() {
    return handleScreenSpecificElements();
  };
})(this));
