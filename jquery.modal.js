
var Modal = {
  defaults: {
    fadeInTime      : 150,
    fadeOutTime     : 150,
  },
  show: function() {
    $('body').addClass('modal-showing');
    if ($('#simple-modal').length<=0) {
      $('body').append($(
        '<div id="modal-mask">' +
          '<div id="simple-modal">' +
            '<span class="close-icon"></span>' +
            '<div id="simple-content"></div>' +
          '</div>' +
        '</div>'
      ));
    }
    $('#simple-modal .close-icon').click(function() {
      Modal.close();
    });
    $('#modal-mask').fadeIn(this.fadeInTime);
  },
  close: function() {
    $('body').removeClass('modal-showing');
    $('#modal-mask').fadeOut(this.fadeOutTime);
  },
  html: function(data) {
    this.show();
    $('#modal-mask #simple-content').html(data);
  }
}
