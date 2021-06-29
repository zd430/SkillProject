// hoverイベントを作成する。
// index.htmlで追加した「.lesson-hover」のhoverイベントを作成する。（hoverイベントは引数でfunction(){}を2つとることに注意。現時点で中身は空でOK。）

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
    
    // 「.lesson-hover」がhoverされたときのhoverイベントを作成してください
    $('.lesson-hover').hover(
      function() {
        
      },
      function() {
        
      }
    );
  });
  