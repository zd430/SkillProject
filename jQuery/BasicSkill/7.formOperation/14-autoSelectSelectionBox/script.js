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
  
    // ボタンにはそれぞれ「data-option」属性がついており、selectのoptionタグのvalue属性に対応した1~3の値がついています。
    // 「.option-btn」要素のclickイベントの中で、【１】変数clickedOptionを用意し、thisとattrメソッドを用いて、クリックされた要素のdata-option属性の値を代入する。
    $('.option-btn').click(function() {
      var optionText = $(this).text();
      // 【１】変数clickedOptionに、クリックした要素のdata-optionの値を代入する。
      var clickedOption = $(this).attr('data-option');
      
      $('#text-form').val(optionText + 'が好きな理由は、');
      // valメソッドとclickedOptionを用いて、クリックしたキャラクターがセレクトフォーム(id:#select-form)で選択されるようにする。
      // 変数clickedOptionを用いて、「#select-form」の値を自動で入力するようにする。
      $('#select-form').val(clickedOption);
      
    });
  });