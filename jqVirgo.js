$.fn.inputVirgo = function (params) {
  params = $.extend({
    className: 'virgo',
    emptyValue: '',
    textLabel: 'Search'
  }, params || {});
  return $(this).each(function (i, el) {
    var $el = $(el);
    if (params.emptyValue === $el.val()) {
      $el
        .val(params.textLabel)
        .addClass(params.className);
    }
    $el
      .bind('focus', function () {
        if ($el.hasClass(params.className)) {
          $el
            .removeClass(params.className)
            .val(params.emptyValue);
        }
      })
      .bind('blur', function (e) {
        if (params.emptyValue == $el.val()) {
          $el
            .val(params.textLabel)
            .addClass(params.className)
        }
      })
      .closest('form').bind('submit', function () {
        if ($el.hasClass(params.className)) {
          $el.val(params.emptyValue);
        }
      });
  });
};
