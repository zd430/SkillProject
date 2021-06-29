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
    
    // 今回は、ヘッダー左側の「にんじゃわんこの部屋」という文字をクリックしたら、ページ最上部に移動するようにします。
    // 「#top-btn」をクリックしたときに
    $('#top-btn').click(function(){
      // html,body要素のjQueryオブジェクトを取得し、scrollTopメソッドを用いることで、ページ最上部まで移動するようにする。
      // （scrollTopは通常$('html, body')に対して用いるので、セットで覚えておく）
      $('html, body').scrollTop(0);
    });
    
  });