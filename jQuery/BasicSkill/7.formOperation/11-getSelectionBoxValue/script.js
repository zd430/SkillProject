$(function() {
    $('#form').submit(function() {
      // selectタグには「select-form」というidがついています。
      // 変数selectValueを定義し、valメソッドを用いて、#select-form要素の選択されている値を代入する。
      var selectValue = $('#select-form').val();
      var textValue = $('#text-form').val();
      // textメソッドを用いて、「#output-select」要素の文字列を変数selectValueの値で書き換える。
      $('#output-select').text(selectValue);
      $('#output-text').text(textValue);
      return false;
    });
  });