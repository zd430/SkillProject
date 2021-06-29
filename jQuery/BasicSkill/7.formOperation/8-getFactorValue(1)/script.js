$(function() {
    // 変数titleを定義、textメソッドで「#title」要素のテキストを代入する。
    var title = $('#title').text();
    
    // 変数titleとtextメソッドを用いて、「#title-text」要素のテキストを書き換える
    $('#title-text').text(title);
  });