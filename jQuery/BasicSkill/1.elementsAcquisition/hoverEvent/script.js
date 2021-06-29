$(function() {
    // 「#language-wrapper」にhoverしたときのhoverイベントを作成する
    $('#language-wrapper').hover(
        // hoverイベントでマウスが乗ったとき、「.language-text」要素を取得し、fadeInメソッドを用いて表示する。
      function() {
        $('.language-text').fadeIn();
      },
    // マウスが外れた時、「.language-text」要素を取得し、fadeOutメソッドを用いて隠す。
      function() {
        $('.language-text').fadeOut();
      }
    );
  });