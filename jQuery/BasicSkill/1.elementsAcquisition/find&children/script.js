$(function() {
    $('#find-method').click(function() {
      // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
      // cssメソッドで文字の色をredに指定する。（メソッドチェーンを使って）
      $('#wrapper').find('a').css('color', 'red');
    });
    
    $('#children-method').click(function() {
      // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
      // 取得した「a」要素を、fadeOutメソッドで隠してください。（メソッドチェーンを使って）
      $('#wrapper').children('a').fadeOut();
    });
  });