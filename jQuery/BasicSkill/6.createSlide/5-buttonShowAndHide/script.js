$(function() {
    $('.index-btn').click(function() {
      $('.active').removeClass('active');
      var clickedIndex = $('.index-btn').index($(this));
      $('.slide').eq(clickedIndex).addClass('active');
    //   まず「.index-btn」のクリックイベントの中で、ボタンの表示/非表示を行っていきます。
      // 1. 変数slideIndexを用意して、「.slide」要素における「.active」要素のインデックス番号を代入する。
      var slideIndex = $('.slide').index($('.active'));
      
    //   「前へ」「次へ」ボタンの表示/非表示を行います。その為に、手順２から記述していく。

      // 3. どのスライドが表示されたときでも、まずは両方のボタンを表示させるようにする。if文の前で、showメソッドを用いて、.change-btn要素を表示させる。
      $('.change-btn').show();
      
      // 2. 「前へ」「次へ」ボタンの表示/非表示を行います。ifとelse ifを用いて、「.change-btn」の表示/非表示をおこなっていきます。hideメソッドを用いて、・slideIndexが0のとき、.prev-btn要素を隠す。・slideIndexが3のとき、.next-btn要素を隠す。しかしこれだけでは一度隠れたボタンは二度と表示されません。次はこれを解決するため、手順３へ。
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == 3) {
        $('.next-btn').hide();
      }
      
    //   ここまで書いてきた処理は「.change-btn」要素のclickイベントでも全く同じ処理が適用できる。「.change-btn」要素のクリックイベントにも全く同じ処理を記述していく。
    });
    
    $('.change-btn').click(function() {
      var $displaySlide = $('.active');
      $displaySlide.removeClass('active');
      if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
      } else {
        $displaySlide.prev().addClass('active');
      }
      
      // 「.index-btn」のクリックイベントと同様の処理を記述していく。
      var slideIndex = $('.slide').index($('.active'));
      
      $('.change-btn').show();
      
      if (slideIndex == 0) {
        $('.prev-btn').hide();
      } else if (slideIndex == 3) {
        $('.next-btn').hide();
      }
      
    });
  });
  