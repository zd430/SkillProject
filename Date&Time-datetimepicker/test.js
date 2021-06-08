$(function() {
    $.datetimepicker.setLocale('ja'); //日本語化
    $('#target').datetimepicker({
        format: 'Y年m月d日 H:i', //フォーマットの指定
    });
  });

//   ---時刻のみ表示ヴァージョン---
//   $(function() {
//     $('#target').datetimepicker({
//       datepicker:false, // 時刻のみ表示
//     });
//   });

//  ---選択可能な時刻を設定ヴァージョン---
// $(function() {
//     $('#target').datetimepicker({
//       allowTimes:[
//         '06:00', '06:30', '07:00', 
//         '12:00', '12:20', '12:45', '13:00', 
//         '21:00', '21:30']
//     });
//   });