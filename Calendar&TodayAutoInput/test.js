$(function() {
    $('#target').datepicker({
        buttonImage: "images/calendarIcon.png",
        buttonImageOnly: true,
        showOn: "both",
        showButtonPanel: true,
        numberOfMonths: 2,  //表示される月の数：２
        dateFormat: 'yy年mm月dd日',  //yyyy年mm月dd日
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+6m',
        duration: 300,
        showAnim: 'slideDown',
    });

    // showButtonPanelで表示した「今日」を押すと本日の日付が入力されるようにする（デフォルトはカレンダーの位置が該当月に戻るだけ）
    $.datepicker._gotoToday = function(id) {
        $(id).datepicker('setDate',new Date()).datepicker('hide').blur().change();
    };

    // $('#target').change(function() {
    //     if ($(this).val().match(/[^0-9\/]/)){
    //         alert('半角数字と'/'以外の文字は使用できません');
    //         $(this).val('');
    //     }
    // });
    
    // $('body input[type="text"]').each(function(i, elem) {
    //     elem.autocomplete = "off";
    // });
  });