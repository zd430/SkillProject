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
    
    // トップへ戻るボタン
    $('#top-btn').click(function(){
      $('html, body').animate({
        'scrollTop': 0
      }, 500);
    });
    
    // 前回実装したscrollTopを応用して、ヘッダー右側にページ内リンクをつくる。
    // 「header a」要素（header要素内のa要素）のclickイベントを作成。
    $('header a').click(function(){
      // thisとattrメソッドを用いることで、クリックした<a>タグのhref要素を取得し、変数idに代入する。
      var id = $(this).attr('href');
      // 先ほど定義した変数idとoffsetメソッドを用いて、飛び先のページ最上部からの距離を取得し、変数positionに代入する。
      var position = $(id).offset().top;
      // html,body要素のjQueryオブジェクトを取得し、animateメソッドを呼び出す。
      // animateメソッドの第一引数は、scrollTopを用いて、変数positionの位置に移動するようにする。
      // 第二引数は、500ミリ秒と指定する。
      $('html, body').animate({
        'scrollTop': position
      }, 500);
    });
    
  });