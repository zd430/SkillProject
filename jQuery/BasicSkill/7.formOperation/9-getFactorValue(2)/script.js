$(function() {
    var title = $('#title').text();
    // idの属性値を取得する。
    // 変数idを定義し、attrメソッドを用いて、.section-content p要素（「.section-content」要素の中のpタグ）のid名を代入する。
    var id = $('.section-content p').attr('id');
    // aタグのhrefの属性値を取得する。
    // 変数hrefを定義し、attrメソッドを用いて、#link要素のhref属性の値を代入する。
    var href = $('#link').attr('href');
    
    $('#title-text').text(title);
    // 定義した2つの変数とtextメソッドを用いて、それぞれ#content-id要素、#link-href要素の文字列を書き換える。
    $('#content-id').text(id);
    $('#link-href').text(href);
});