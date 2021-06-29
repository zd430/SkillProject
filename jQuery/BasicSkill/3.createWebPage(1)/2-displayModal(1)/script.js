$(function() {
    // 「#login-show」要素に対するclickイベントを作成する
    // 「#login-show」がクリックされた時、fadeInメソッドを用いて、「#login-modal」を表示するようにする。
    $('#login-show').click(function() {
      $('#login-modal').fadeIn();
    });
    
  });