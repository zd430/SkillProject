$(function() {
    $('#target').datepicker({
        buttonImage: "images/calendarIcon.png", //#targetの真横にアイコン設置
        buttonImageOnly: true, //画像のみ表示（true）ボタンとして表示かつボタン内に画像表示（false）
        showOn: "both", //bothでテキストボックス選択時とアイコンクリック時の両方でカレンダー表示
        showButtonPanel: true, //カレンダーにtoday、Doneボタンを設定
        numberOfMonths: 2,  //表示される月の数：２
        dateFormat: 'yy年mm月dd日',  //yyyy年mm月dd日
        changeMonth: true, //月選択プルダウンの表示・非表示
        minDate: new Date(), //選択可能な最小日付、new Date()ではなく、'+1d'にすれば明日以降からしか設定できない
        maxDate: '+6m', //選択可能な最大日付
        showAnim: 'slideDown', //カレンダー開閉時のアニメーションの設定
    });

    // showButtonPanelで表示した「今日」を押すと本日の日付が入力されるようにする（デフォルトはカレンダーの位置が該当月に戻るだけ）
    $.datepicker._gotoToday = function(id) {
        $(id).datepicker('setDate',new Date()).datepicker('hide').blur().change();
    };

    //  ページのロード時にあらかじめ今日の日付がセットされているようにする
    $('#target').datepicker().datepicker('setDate','today');
  
});