// アコーディオンの開閉操作を完成させる。

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
    
    $('.lesson-hover').hover(
      function() {
        $(this).find('.text-contents').addClass('text-active');
      },
      function() {
        $(this).find('.text-contents').removeClass('text-active');
      }
    );
    
    // thisを用いて子要素のspanタグの要素を取得し、textメソッドを用いて + に書き換える。
    $('.faq-list-item').click(function() {
        var $answer = $(this).find('.answer');
        // clickイベントのif文がtrueだったとき、slideUpメソッドを用いて、$answerを隠す。
      if($answer.hasClass('open')) {
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠す。
        $answer.slideUp();
        
        // 子要素のspanタグの中身をtextメソッドを用いて - から + に書き換える。
        $(this).find('span').text('+');
        
        // if文のelseの中で、slideDownメソッドを用いて、$answerを表示する。
        // thisを用いて子要素のspanタグの要素を取得し、textメソッドを用いて - に書き換える。
      } else {
        $answer.addClass('open');
        // slideDownメソッドを用いて、$answerを表示する。
        $answer.slideDown();
        
        // 子要素のspanタグの中身をtextメソッドを用いて - から + に書き換える。
        $(this).find('span').text('-');
      }
    });
  });
  