$(function() {
    // 「toggleChangeBtn」という関数に「.change-btn」要素の表示/非表示の処理をまとめていきます。toggleChangeBtn関数を定義する。
    function toggleChangeBtn() {
      var slideIndex = $('.slide').index($('.active'));
      $('.change-btn').show();
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == 3) {
        $('.next-btn').hide();
      }
    }
    
    $('.index-btn').click(function() {
      $('.active').removeClass('active');
      var clickedIndex = $('.index-btn').index($(this));
      $('.slide').eq(clickedIndex).addClass('active');
      
      // ５で元々ここにあったコードをtoggleChangeBtn関数にまとめ、定義した関数を呼び出す。
      toggleChangeBtn();
    });
    
    $('.change-btn').click(function() {
      var $displaySlide = $('.active');
      $displaySlide.removeClass('active');
      if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
      } else {
        $displaySlide.prev().addClass('active');
      }
      
      // ５で元々ここにあったコードをtoggleChangeBtn関数にまとめ、定義した関数を呼び出す。
      toggleChangeBtn();
    });
  });
  