$(function() {
    // フォームに入力された値を取得して表示してみる。
    // フォームには「form」というidがついています。「#form」要素のsubmitイベントを作成してみる。
    $('#form').submit(function() {
    // textareaタグには「text-form」というidがついている。
    // submitイベント内で、変数textValueを定義し、#text-form要素に記入されている値を代入する。
      var textValue = $('#text-form').val();
    // #output-text要素の文字列を変数textValueの値で書き換える。
      $('#output-text').text(textValue);
    // 今回は、フォームの値を実際に送信するわけではないので、submitイベントの最後で、return false;と記述する。
      return false;
    });
});