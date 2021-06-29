$(function() {
    $('.index-btn').click(function() {
      $('.active').removeClass('active');
      var clickedIndex = $('.index-btn').index($(this));
      $('.slide').eq(clickedIndex).addClass('active');
    });
    
    $('.change-btn').click(function() {
      /* 現在表示されている要素を変数にいれておく。
        変数$displaySlideに.active要素を代入する。 */
      var $displaySlide = $('.active');
      
      // 変数$displaySlideからactiveクラスを取り除く。
      $displaySlide.removeClass('active');
      
      /* ifとelseを用いて、「前へ」もしくは「次へ」をクリックしたときに正しいスライドが表示されるようにする。
        $displaySlideの前もしくは次の要素にactiveクラスをつける。 */
    // クリックした要素（this）がnext-btnクラスを持っていたとき、$displaySlideの次の要素にactiveクラスを付ける。
      if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
    // next-btnクラスを持っていなかったとき、変数$displaySlideの前の要素にactiveクラスを付ける。
      } else {
        $displaySlide.prev().addClass('active');
      }
    });
  });
  