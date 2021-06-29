$(function() {
    $('#form').submit(function() {
      var selectItem = $('#select-form').val();
      var textItem = $('#text-form').val();
      if (textItem == '') {
        $('#error-message').text('理由を記入してください');
      } else {
        $('#error-message').text('');
      }
      $('#output-select').text(selectItem);
      $('#output-text').text(textItem);
      return false;
    });
  
    // 「.option-btn」要素のclickイベントをつくる。
    // その中で、変数optionTextを用意して、クリックした要素のテキストを代入する。（thisとtextメソッドを用いる。）
    $('.option-btn').click(function() {
      var optionText = $(this).text();
    // valメソッドを用いて、理由を記入する入力欄である#text-form要素に、◯◯が好きな理由は、というテキストが自動で入るようにする。
    // ただし、◯◯にはoptionTextの値を入れる。（文字列の連結で書く）
      $('#text-form').val(optionText + 'が好きな理由は、');
    });
  });