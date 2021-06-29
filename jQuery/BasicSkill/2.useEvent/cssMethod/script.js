$(function() {
    // 「#change-css」要素に対するclickイベントを作成する
    // clickイベントの中で、２つのcssメソッドを用いて、「#text」要素に以下のCSSを指定する。
    // ・文字の色（colorプロパティ）をred
    // ・文字の大きさ（font-sizeプロパティ）を50px
    $('#change-css').click(function() {
      $('#text').css('color', 'red');
      $('#text').css('font-size', '50px');
    });
      
  });