// hoverイベントの中身を書いていく。「.text-active」の付け外しで、説明文の表示・非表示を実現する。

$(function() {

    $('#login-show').click(function() {
      $('#login-modal').fadeIn();
    });
  
    $('.signup-show').click(function() {
      $('#signup-modal').fadeIn();
    });
  
    $('.close-modal').click(function() {
      $('#login-modal').fadeOut();
      $('#signup-modal').fadeOut();
    });
    
    // hoverイベントの第一引数で（マウスがのったとき）、thisとfindを用いて子要素のtext-contentsクラスを取得し、
    // さらにaddClassメソッドを用いて、text-activeクラスをつける。
    $('.lesson-hover').hover(
      function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつける。
        $(this).find('.text-contents').addClass('text-active');
        
      },
    // hoverイベントの第二引数で（マウスが外れたとき）、thisとfindを用いて子要素のtext-contentsクラスを取得し、
    // さらにremoveClassメソッドを用いて、text-activeクラスを外す。
      function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外す。
        $(this).find('.text-contents').removeClass('text-active');
        
      }
    );
  });
  