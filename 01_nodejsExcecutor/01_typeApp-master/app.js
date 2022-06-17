var fs = require('fs');
var filename = '1';
var loc = filename + '.txt';
//函数功能：在指定长度处自动添加换行符，以英文长度为准，及8代表8个英文或4个汉字
function fnAddBr(sStr, iPerLineLen) {
  // alert(sStr.length);
  // if (sStr.replace(/[^/x00-/xff]/g, "xx").length <= iPerLineLen) {
  //     return -1;
  // }
  var str = '';
  var l = 0;
  var schar;
  for (var i = 0; (schar = sStr.charAt(i)); i++) {
    str += schar;
    l += 1;

    if (schar == '\n') {
      l = 0;
    }
    // l += (schar.match(/[^/x00-/xff]/) != null ? 2 : 1);
    if (l >= iPerLineLen) {
      //判断是不是空格
      if (schar == ' ') {
        str += '\r\n';
        l = 0;
      }
    }
  }
  return str;
}
fs.readFile(loc, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
  // var data = data.replace(/.{90}/g, "$&\r\n")
  var data = fnAddBr(data, 80);
  var arr = data.split('\r\n');

  console.log(arr);
  var str = '';
  var str1 = '<div id="i_';
  var str2 = '" class="typing"><div class="text"><span>';
  var str3 = '</span></div><input type="hidden" value="';
  var str4 =
    '"><input autocomplete="off" readonly="readonly" name="n0f1b992c22480a8e[]" type="text" class="typing" value=""></div>';
  for (var i = 0; i < arr.length; i++) {
    str = str + str1 + i + str2 + arr[i] + str3 + arr[i] + str4;
  }
  // console.log(str)
  fs.readFile('article.html', 'utf-8', function (err, article) {
    if (err) {
      console.log(err);
    }

    var article = article.replace(/{{{content}}}/, str);
    // console.log(article)
    fs.writeFile(filename + '.html', article, function (err) {
      if (err) {
        return console.error(err);
      }
      console.log('数据写入成功！');
    });
  });
});
