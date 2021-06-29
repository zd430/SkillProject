$(function() {
    $('#login-show').click(function() {
      $('#login-modal').fadeIn();
    });
    
    // 「.signup-show」のclickイベントを作成する。
    // clickイベントの中で、fadeInメソッドを用いて「#signup-modal」が表示されるようにする。
    $('.signup-show').click(function() {
      $('#signup-modal').fadeIn();
    });
    
  });
  