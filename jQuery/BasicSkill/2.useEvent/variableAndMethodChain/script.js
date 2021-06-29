// clickイベント内で、変数$titleを宣言し、「#title」のjQueryオブジェクトを代入する。
// 「#title」に対する3つのメソッドを、変数$titleを使って書き換える。
$(function() {
    $('.btn').click(function() {
      // $('#title')を変数$titleに代入。
      var $title = $('#title');
      
      // 「#title」に対する3つのメソッドを、変数を使って書き換える。
      $title.css('color', 'red');
      $title.html('こんばんは、にんじゃわんこさん');
      $title.fadeOut(1000);
      
      // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換える。
      $('#text').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
    });
    
  });