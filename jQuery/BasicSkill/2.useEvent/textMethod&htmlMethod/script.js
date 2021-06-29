$(function() {
    // 「#change-text」要素に対するclickイベントを作成する
    $('#change-text').click(function() {
        // textメソッドを用いて「#text」の文字列を以下のものに変更する。
      $('#text').text('ようこそ、Progateへ');
    });
    
    // 「#change-html」要素に対するclickイベントを作成する
    $('#change-html').click(function() {
        // htmlメソッドを用いて「#text」のHTMLを以下のリンクに変更する
        // <a>タグはシングルクォーテーションで囲う必要あり。中身のリンクはダブルクォーテンーション。
       $('#text').html('<a href="https://prog-8.com/">ようこそ、Progateへ</a>');
    });
  
  });