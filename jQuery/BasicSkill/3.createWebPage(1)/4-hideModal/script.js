// 「.close-modal」をクリックしたら、ログイン用、新規登録用のモーダルがともに閉じるようにする。

$(function() {
    $('#login-show').click(function() {
      $('#login-modal').fadeIn();
    });
    
    $('.signup-show').click(function() {
      $('#signup-modal').fadeIn();
    });
    
    // 「.close-modal」のclickイベントを作る。
    // clickイベント内で、fadeOutメソッドを用いて「#login-modal」を隠す。
    $('.close-modal').click(function() {
      $('#login-modal').fadeOut();
    // 同じイベント内で、fadeOutメソッドを用いて「#signup-modal」も隠す。
      $('#signup-modal').fadeOut();
    });
    
  });
  