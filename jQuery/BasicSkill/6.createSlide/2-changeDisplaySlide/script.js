$(function() {
    $('#second-btn').click(function() {
      // 「.active」要素からactiveクラスを取り除く
      //  クリックするとデフォルトのスライドが消える
      $('.active').removeClass('active');
      // 2つ目の「.slide」要素を取得し、activeクラスをつける
      // ２つ目のボタンを押した時に、２枚目のスライドが表示されるようになる
      $('.slide').eq(1).addClass('active');
    });
  });
  