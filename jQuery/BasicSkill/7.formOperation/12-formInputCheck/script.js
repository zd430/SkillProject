$(function() {
    $('#form').submit(function() {
      var selectValue = $('#select-form').val();
      var textValue = $('#text-form').val();
      
      // ここではtextareaに「理由」が入力されているかをチェックし、入力されていなければエラー文を表示するようにする。
      // if文を用いて、textValueが空文字列のとき、#error-message要素の文字列を「理由を記入してください」というエラー文を表示するようにする。
      if (textValue == '') {
        $('#error-message').text('理由を記入してください');
      // いまの状態では、一度エラー文が表示されると、その後正しく入力してもエラー文が残ってしまう。
      // elseを用いて、textValueが空文字列でない場合、#error-message要素の文字列を空文字列''（シングルクォーテーション２つ）に書き換える。
      } else {
        $('#error-message').text('');
      }
      
      $('#output-select').text(selectValue);
      $('#output-text').text(textValue);
      return false;
    });
  });