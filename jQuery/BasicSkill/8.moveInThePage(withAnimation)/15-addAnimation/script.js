$(function(){
    // 今回は、ページのフッター部分にあるSNSボタンにマウスが乗った時に、各SNSのアイコンが拡大されるようにする。
    // 各SNSボタンには「.social-icon」というclass名がつけられている。

    // .social-icon要素のhoverイベントを作成する。
    // 「.social-icon」にマウスが乗ったとき↓
    $('.social-icon').hover(
      function(){
        // そのfont-sizeを30pxに変更し、アニメーションの時間は300ミリ秒に指定。
        $(this).animate({
          'font-size':'30px'
        }, 300);
      },
        // 離れたときにはfont-sizeを24pxに変更し、アニメーションの時間は300ミリ秒に指定。
      function(){
        $(this).animate({
          'font-size':'24px'
        }, 300);
      }
    );
    
  });