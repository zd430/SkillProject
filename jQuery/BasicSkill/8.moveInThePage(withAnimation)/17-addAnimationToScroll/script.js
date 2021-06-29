$(function(){
  
    // SNSボタン
    $('.social-icon').hover(
      function(){
        $(this).children('span').animate({
          'font-size':'30px'
        }, 300);
      },
      function(){
        $(this).children('span').animate({
          'font-size':'24px'
        }, 300);
      }
    );
    
    $('#top-btn').click(function(){
      // animateメソッドを用いて、アニメーション付きでスクロールするようにする。アニメーションの時間は500ミリ秒を指定する。
      $('html, body').animate({
        'scrollTop': 0
      }, 500);
    });
    
  });