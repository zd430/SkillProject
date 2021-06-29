// 質問がクリックされたときのclickイベントを作成する。

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
    
    // .faq-list-itemがクリックされたときのclickイベントを作る。
    $('.faq-list-item').click(function() {
        // clickイベント内で複数回用いるjQueryオブジェクトを変数化する。
        // clickイベントの中で、変数$answerを宣言し、thisとfindを用いて、子要素の.answerを取得し代入する。
      var $answer = $(this).find('.answer');
    // clickイベントの中で、if文とhasClassメソッドを用いて条件分岐を行う。
    // $answerがopenというclassを持っていれば、removeClassメソッドを用いて、$answerからopenを取り除く。
    // そうでなければ、addClassメソッドを用いて、$answerにopenを追加する。
      if ($answer.hasClass('open')) {
        $answer.removeClass('open');
      } else {
        $answer.addClass('open');
      }
    });
  });
  