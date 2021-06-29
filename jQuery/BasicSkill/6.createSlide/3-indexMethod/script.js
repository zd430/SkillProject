$(function() {
    $('.index-btn').click(function() {
      $('.active').removeClass('active');
      
      // 変数clickedIndexを定義し、クリックしたボタン（.index-btn）のインデックス番号を取得・代入する
      var clickedIndex = $('.index-btn').index($(this));
      
      // clickedIndexに対応するスライドを表示するため、
      // クリックした数字に対応する.slide要素を取得し、activeクラスをつける。
      $('.slide').eq(clickedIndex).addClass('active');
    });
  });
  